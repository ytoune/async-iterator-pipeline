export const merge = <P>(iterable: AsyncIterable<P>) =>
	async function*<T>(iter: AsyncIterable<T>): AsyncIterable<T | P> {
		for await (const v of iter) yield v
		for await (const v of iterable) yield v
	}

export default merge
