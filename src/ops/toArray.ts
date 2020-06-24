export const toArray = () => async <T>(iter: AsyncIterable<T>) => {
	const list: T[] = []
	for await (const i of iter) list.push(i)
	return list
}

export default toArray
