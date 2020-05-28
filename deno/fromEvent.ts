interface AddEventListenerOptions extends EventListenerOptions {
	once?: boolean
	passive?: boolean
}

interface EventListenerOptions {
	capture?: boolean
}

interface EventListener<Event> {
	(evt: Event): void
}

interface EventTarget<Event> {
	addEventListener(
		type: string,
		listener: EventListener<Event>,
		options?: boolean | AddEventListenerOptions,
	): void
	removeEventListener(
		type: string,
		listener: EventListener<Event>,
		options?: boolean | EventListenerOptions,
	): void
}

type Options = AddEventListenerOptions

export const fromEvent = <Event>(
	target: EventTarget<Event>,
	type: string,
	options?: Options,
) => {
	const { once, passive, capture } = options || {}
	const add = options && { once, passive, capture }
	const remove = null == capture ? undefined : { capture }
	const iterable: AsyncIterable<Event> = {
		[Symbol.asyncIterator]: () => {
			const queue: Event[] = []
			const pins: ((e: Event) => void)[] = []
			let done = false
			const handle = (event: Event) => {
				pins.length ? pins.pop()!(event) : queue.unshift(event)
			}
			target.addEventListener(type, handle, add)
			const next = async (): Promise<IteratorResult<Event, undefined>> => {
				if (done) return { done: true, value: undefined }
				const value = queue.pop()
				if (value) return { done: false, value }
				return { done: false, value: await new Promise(r => pins.unshift(r)) }
			}
			const close = async (): Promise<IteratorResult<Event, undefined>> => {
				done = true
				target.removeEventListener(type, handle, remove)
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

export default fromEvent
