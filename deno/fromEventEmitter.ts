interface EventEmitter {
	/* eslint-disable @typescript-eslint/no-explicit-any */
	on(event: string | symbol, listener: (arg: any) => void): this
	off(event: string | symbol, listener: (arg: any) => void): this
	/* eslint-enable @typescript-eslint/no-explicit-any */
}

export const fromEventEmitter = <Event>(
	target: EventEmitter,
	type: string | symbol,
) => {
	const iterable: AsyncIterable<Event> = {
		[Symbol.asyncIterator]: () => {
			const queue: Event[] = []
			const pins: ((e: Event) => void)[] = []
			let done = false
			const handle = (event: Event) => {
				pins.length ? pins.pop()!(event) : queue.unshift(event)
			}
			target.on(type, handle)
			const next = async (): Promise<IteratorResult<Event, undefined>> => {
				if (done) return { done: true, value: undefined }
				const value = queue.pop()
				if (value) return { done: false, value }
				return { done: false, value: await new Promise(r => pins.unshift(r)) }
			}
			const close = async (): Promise<IteratorResult<Event, undefined>> => {
				done = true
				target.off(type, handle)
				return { done: true, value: undefined }
			}
			return {
				next,
				return: close,
				throw: close,
			}
		},
	}
	return iterable
}

export default fromEventEmitter
