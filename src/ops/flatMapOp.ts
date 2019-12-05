export const flatMapOp = <T, P>(f: (i: T) => P[] | Promise<P[]>) => (
	iter: AsyncIterator<T>,
) => {
	const cur: IteratorResult<P>[] = []
	let done = false
	return {
		async next(): Promise<IteratorResult<P>> {
			while (!done && !cur.length) {
				const r = await iter.next()
				if (r.done) {
					done = true
				} else {
					for (const value of asArray(await f(r.value)))
						cur.push({ done: false, value })
				}
			}
			if (done) return { done: true, value: undefined }
			return cur.shift()!
		},
	}
}

const asArray = <T>(v: T | T[]) => {
	if (Array.isArray(v)) return v
	return [v]
}
