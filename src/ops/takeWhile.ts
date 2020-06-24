export const takeWhile = <T>(f: (i: T) => boolean | Promise<boolean>) =>
	async function* (iter: AsyncIterable<T>): AsyncIterable<T> {
		for await (const v of iter)
			if (await f(v)) yield v
			else break
	}

export default takeWhile
