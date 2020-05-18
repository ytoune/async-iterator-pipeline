export const skip = (skip: number) =>
	async function*<T>(iter: AsyncIterable<T>): AsyncIterable<T> {
		let count = 0
		for await (const v of iter) {
			if (++count <= skip) continue
			yield v
		}
	}

export default skip
