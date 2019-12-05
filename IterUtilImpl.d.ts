export declare class IterUtilImpl<S, T> implements AsyncIterable<T> {
    private readonly list;
    private readonly mapiter;
    constructor(list: AsyncIterable<S>, mapiter: (iter: AsyncIterator<S>) => AsyncIterator<T>);
    [Symbol.asyncIterator](): AsyncIterator<T, any, undefined>;
    flatMap<P>(f: (i: T) => P[] | Promise<P[]>): IterUtilImpl<T, P>;
    flat(): IterUtilImpl<T, T extends (infer P_1)[] ? P_1 : T>;
    merge<P>(iterable: AsyncIterable<P>): IterUtilImpl<T, T | P>;
    skip(offset: number): IterUtilImpl<T, T>;
    take(limit: number): IterUtilImpl<T, T>;
    concat<P>(i: AsyncIterable<P>): IterUtilImpl<unknown, T | P>;
    concat<P, P2>(i: AsyncIterable<P>, i2: AsyncIterable<P2>): IterUtilImpl<unknown, T | P | P2>;
    concat<P, P2, P3>(i: AsyncIterable<P>, i2: AsyncIterable<P2>, i3: AsyncIterable<P3>): IterUtilImpl<unknown, T | P | P2 | P3>;
    concat<P, P2, P3, P4>(i: AsyncIterable<P>, i2: AsyncIterable<P2>, i3: AsyncIterable<P3>, i4: AsyncIterable<P4>): IterUtilImpl<unknown, T | P | P2 | P3 | P4>;
    concat<P, P2, P3, P4, P5>(i: AsyncIterable<P>, i2: AsyncIterable<P2>, i3: AsyncIterable<P3>, i4: AsyncIterable<P4>, i5: AsyncIterable<P5>): IterUtilImpl<unknown, T | P | P2 | P3 | P4 | P5>;
    concat<P, P2, P3, P4, P5, P6>(i: AsyncIterable<P>, i2: AsyncIterable<P2>, i3: AsyncIterable<P3>, i4: AsyncIterable<P4>, i5: AsyncIterable<P5>, i6: AsyncIterable<P6>): IterUtilImpl<unknown, T | P | P2 | P3 | P4 | P5 | P6>;
    concat<P, P2, P3, P4, P5, P6, P7>(i: AsyncIterable<P>, i2: AsyncIterable<P2>, i3: AsyncIterable<P3>, i4: AsyncIterable<P4>, i5: AsyncIterable<P5>, i6: AsyncIterable<P6>, i7: AsyncIterable<P7>): IterUtilImpl<unknown, T | P | P2 | P3 | P4 | P5 | P6 | P7>;
    concat<P, P2, P3, P4, P5, P6, P7, P8>(i: AsyncIterable<P>, i2: AsyncIterable<P2>, i3: AsyncIterable<P3>, i4: AsyncIterable<P4>, i5: AsyncIterable<P5>, i6: AsyncIterable<P6>, i7: AsyncIterable<P7>, i8: AsyncIterable<P8>): IterUtilImpl<unknown, T | P | P2 | P3 | P4 | P5 | P6 | P7 | P8>;
    concat<P, P2, P3, P4, P5, P6, P7, P8, P9>(i: AsyncIterable<P>, i2: AsyncIterable<P2>, i3: AsyncIterable<P3>, i4: AsyncIterable<P4>, i5: AsyncIterable<P5>, i6: AsyncIterable<P6>, i7: AsyncIterable<P7>, i8: AsyncIterable<P8>, i9: AsyncIterable<P9>): IterUtilImpl<unknown, T | P | P2 | P3 | P4 | P5 | P6 | P7 | P8 | P9>;
    concat<P>(...iterables: AsyncIterable<P>[]): IterUtilImpl<unknown, T | P>;
    map<P>(f: (i: T) => P | Promise<P>): IterUtilImpl<T, P>;
    filter(f: (i: T) => boolean | Promise<boolean>): IterUtilImpl<T, T>;
    tap(f: (i: T) => void): IterUtilImpl<T, T>;
    first(): Promise<T | undefined>;
    last(): Promise<T | undefined>;
    toArray(): Promise<T[]>;
    forEach(f: (i: T) => void | Promise<void>): Promise<void>;
}
