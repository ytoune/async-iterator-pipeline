export const mergeOp = <T, P>(iterable: AsyncIterable<P>) => (
	iter: AsyncIterator<T>,
) => {
	let it: AsyncIterator<T | P> = iter
	let done = false
	let flag = true
	return {
		async next(): Promise<IteratorResult<T | P>> {
			while (!done) {
				const r = await it.next()
				if (!r.done) return r
				if (flag) {
					flag = false
					it = iterable[Symbol.asyncIterator]()
					continue
				}
				done = true
			}
			return { done, value: undefined }
		},
	}
}
