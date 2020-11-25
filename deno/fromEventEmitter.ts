/* eslint-disable @typescript-eslint/no-non-null-assertion */

interface EventEmitter {
	/* eslint-disable @typescript-eslint/no-explicit-any */
	on(event: string | symbol, listener: (arg: any) => void): this
	off(event: string | symbol, listener: (arg: any) => void): this
	/* eslint-enable @typescript-eslint/no-explicit-any */
}

export async function* fromEventEmitter<Event>(
	target: EventEmitter,
	type: string | symbol,
): AsyncIterable<Event> {
	const queue: Event[] = []
	const handle = (event: Event) => {
		queue.unshift(event)
		res?.()
	}
	target.on(type, handle)
	let res: (() => void) | undefined
	try {
		for (;;) {
			await new Promise<void>(r => (res = r))
			while (queue.length) yield queue.pop()!
		}
	} finally {
		target.off(type, handle)
	}
}

export default fromEventEmitter
