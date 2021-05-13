export const first =
	() =>
	async <T>(iter: AsyncIterable<T>) => {
		for await (const i of iter) return i
	}

export default first
