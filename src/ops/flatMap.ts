export const flatMap = <T, P>(f: (i: T) => P[] | Promise<P[]>) =>
	async function* (iter: AsyncIterable<T>): AsyncIterable<P> {
		for await (const v of iter) for (const p of await f(v)) yield p
	}

export default flatMap
