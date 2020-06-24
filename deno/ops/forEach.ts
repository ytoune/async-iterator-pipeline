export const forEach = <T>(f: (i: T) => void | Promise<void>) => async (
	iter: AsyncIterable<T>,
) => {
	for await (const i of iter) await f(i)
}

export default forEach
