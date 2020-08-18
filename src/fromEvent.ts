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

export async function* fromEvent<Event>(
	target: EventTarget<Event>,
	type: string,
	options?: Options,
): AsyncIterable<Event> {
	const queue: Event[] = []
	const handle = (event: Event) => {
		queue.unshift(event)
		res?.()
	}
	const { once, passive, capture } = options || {}
	const add = options && { once, passive, capture }
	const remove = null == capture ? undefined : { capture }
	target.addEventListener(type, handle, add)
	let res: (() => void) | undefined
	try {
		for (;;) {
			await new Promise<void>(r => (res = r))
			while (queue.length) yield queue.pop()!
		}
	} finally {
		target.removeEventListener(type, handle, remove)
	}
}

export default fromEvent
