export const includes = <T>(v: T) => async (iter: AsyncIterable<T>) => {
	for await (const i of iter) if (v === i) return true
	return false
}

export default includes
