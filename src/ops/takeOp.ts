import { WrapIter } from '../libs/WrapIter'

export const takeOp = <T>(limit: number) => (iter: AsyncIterator<T>) => {
	const it = new WrapIter(iter)
	return {
		async next(): Promise<IteratorResult<T>> {
			if (it.done || limit <= it.cur++) return { done: true, value: undefined }
			const r = await it.next()
			if (r.done) it.done = true
			return r
		},
	}
}
