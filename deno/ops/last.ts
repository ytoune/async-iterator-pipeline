export const last =
	() =>
	async <T>(iter: AsyncIterable<T>) => {
		let l: T | undefined
		for await (const i of iter) l = i
		return l
	}

export default last
