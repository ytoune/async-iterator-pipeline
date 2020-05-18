type Flatten<T> = T extends (infer P)[] ? P : T

export const flat = async function*<T>(
	iter: AsyncIterable<T>,
): AsyncIterable<Flatten<T>> {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	for await (const v of iter as any) {
		if (Array.isArray(v)) for (const p of v) yield p
		else yield v
	}
}
