export class WrapIter<T> {
	cur = 0
	done = false
	constructor(private readonly iter: AsyncIterator<T>) {}
	async next() {
		const r = await this.iter.next()
		if (r.done) this.done = true
		return r
	}
}
