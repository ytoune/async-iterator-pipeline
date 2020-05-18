export const tap = <T>(f: (i: T) => void | Promise<void>) =>
	async function*(iter: AsyncIterable<T>): AsyncIterable<T> {
		for await (const v of iter) {
			await f(v)
			yield v
		}
	}

export default tap
