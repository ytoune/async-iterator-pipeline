export class AsyncIterableFactory<T> implements AsyncIterable<T> {
	constructor(private readonly fact: (idx: number) => Promise<T>) {}
	async *[Symbol.asyncIterator]() {
		const { fact } = this
		for (let idx = 0; ; ++idx) yield await fact(idx)
	}
}
