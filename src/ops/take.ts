export const take = (take: number) =>
	async function*<T>(iter: AsyncIterable<T>): AsyncIterable<T> {
		let count = 0
		if (take <= count) return
		for await (const v of iter) {
			yield v
			if (take <= ++count) break
		}
	}

export default take
