interface Concat {
	<P>(i: AsyncIterable<P>): <T>(i: AsyncIterable<T>) => AsyncIterable<T | P>
	<P, P2>(i: AsyncIterable<P>, i2: AsyncIterable<P2>): <T>(
		i: AsyncIterable<T>,
	) => AsyncIterable<T | P | P2>
	<P, P2, P3>(
		i: AsyncIterable<P>,
		i2: AsyncIterable<P2>,
		i3: AsyncIterable<P3>,
	): <T>(i: AsyncIterable<T>) => AsyncIterable<T | P | P2 | P3>
	<P, P2, P3, P4>(
		i: AsyncIterable<P>,
		i2: AsyncIterable<P2>,
		i3: AsyncIterable<P3>,
		i4: AsyncIterable<P4>,
	): <T>(i: AsyncIterable<T>) => AsyncIterable<T | P | P2 | P3 | P4>
	<P, P2, P3, P4, P5>(
		i: AsyncIterable<P>,
		i2: AsyncIterable<P2>,
		i3: AsyncIterable<P3>,
		i4: AsyncIterable<P4>,
		i5: AsyncIterable<P5>,
	): <T>(i: AsyncIterable<T>) => AsyncIterable<T | P | P2 | P3 | P4 | P5>
	<P, P2, P3, P4, P5, P6>(
		i: AsyncIterable<P>,
		i2: AsyncIterable<P2>,
		i3: AsyncIterable<P3>,
		i4: AsyncIterable<P4>,
		i5: AsyncIterable<P5>,
		i6: AsyncIterable<P6>,
	): <T>(i: AsyncIterable<T>) => AsyncIterable<T | P | P2 | P3 | P4 | P5 | P6>
	<P, P2, P3, P4, P5, P6, P7>(
		i: AsyncIterable<P>,
		i2: AsyncIterable<P2>,
		i3: AsyncIterable<P3>,
		i4: AsyncIterable<P4>,
		i5: AsyncIterable<P5>,
		i6: AsyncIterable<P6>,
		i7: AsyncIterable<P7>,
	): <T>(
		i: AsyncIterable<T>,
	) => AsyncIterable<T | P | P2 | P3 | P4 | P5 | P6 | P7>
	<P, P2, P3, P4, P5, P6, P7, P8>(
		i: AsyncIterable<P>,
		i2: AsyncIterable<P2>,
		i3: AsyncIterable<P3>,
		i4: AsyncIterable<P4>,
		i5: AsyncIterable<P5>,
		i6: AsyncIterable<P6>,
		i7: AsyncIterable<P7>,
		i8: AsyncIterable<P8>,
	): <T>(
		i: AsyncIterable<T>,
	) => AsyncIterable<T | P | P2 | P3 | P4 | P5 | P6 | P7 | P8>
	<P, P2, P3, P4, P5, P6, P7, P8, P9>(
		i: AsyncIterable<P>,
		i2: AsyncIterable<P2>,
		i3: AsyncIterable<P3>,
		i4: AsyncIterable<P4>,
		i5: AsyncIterable<P5>,
		i6: AsyncIterable<P6>,
		i7: AsyncIterable<P7>,
		i8: AsyncIterable<P8>,
		i9: AsyncIterable<P9>,
	): <T>(
		i: AsyncIterable<T>,
	) => AsyncIterable<T | P | P2 | P3 | P4 | P5 | P6 | P7 | P8 | P9>
	<P>(...iterables: AsyncIterable<P>[]): <T>(
		i: AsyncIterable<T>,
	) => AsyncIterable<T | P>
}

export const concat: Concat = <P>(...iterables: AsyncIterable<P>[]) =>
	async function* <T>(iter: AsyncIterable<T>): AsyncIterable<T | P> {
		for await (const v of iter) yield v
		for (const iterable of iterables) for await (const v of iterable) yield v
	}

export default concat
