export class AsyncIterableFactory<T> implements AsyncIterable<T> {
	constructor(private readonly fact: (idx: number) => Promise<T>) {}
	[Symbol.asyncIterator]() {
		let idx_ = 0
		const { fact } = this
		return {
			async next(): Promise<IteratorResult<T>> {
				const idx = idx_++
				return { done: false, value: await fact(idx) }
			},
		}
	}
}
