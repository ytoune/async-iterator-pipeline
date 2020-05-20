export const chunk = (size: number) =>
	async function* <T>(iter: AsyncIterable<T>): AsyncIterable<T[]> {
		let buf: T[] = []
		for await (const v of iter) {
			buf.push(v)
			if (buf.length < size) continue
			yield buf
			buf = []
		}
		if (buf.length) yield buf
	}

export default chunk
