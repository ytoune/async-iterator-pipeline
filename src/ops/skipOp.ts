import { WrapIter } from '../libs/WrapIter'

export const skipOp = <T>(offset: number) => (iter: AsyncIterator<T>) => {
	const it = new WrapIter(iter)
	return {
		async next(): Promise<IteratorResult<T>> {
			while (!it.done && ++it.cur <= offset) await it.next()
			if (it.done) return { done: true, value: undefined }
			return await it.next()
		},
	}
}
