/* eslint-disable @typescript-eslint/no-explicit-any */
type Flatten<T> = T extends (infer P)[] ? P : T

export const flat = (depth = 1) =>
	async function* <T>(iter: AsyncIterable<T>): AsyncIterable<Flatten<T>> {
		for await (const v of iter as any) {
			if (Array.isArray(v)) {
				const flattend: any[] = []
				flatarr(v, depth - 1, flattend)
				for (const p of flattend) yield p
			} else yield v
		}
	}

export default flat

const flatarr = (array: readonly any[], depth: number, flattend: any[]) => {
	for (const el of array) {
		if (Array.isArray(el) && depth > 0) {
			flatarr(el, depth - 1, flattend)
		} else {
			flattend.push(el)
		}
	}
}
