export const map = <T, P>(f: (i: T) => P | Promise<P>) =>
	async function*(iter: AsyncIterable<T>): AsyncIterable<P> {
		for await (const v of iter) yield await f(v)
	}

export default map
