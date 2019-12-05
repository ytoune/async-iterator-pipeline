export declare class IterUtilImpl<S, T> implements AsyncIterable<T> {
    private readonly list;
    private readonly mapiter;
    constructor(list: AsyncIterable<S>, mapiter: (iter: AsyncIterator<S>) => AsyncIterator<T>);
    [Symbol.asyncIterator](): AsyncIterator<T, any, undefined>;
    flatMap<P>(f: (i: T) => P[] | Promise<P[]>): IterUtilImpl<T, P>;
    flat(): IterUtilImpl<T, T extends (infer P_1)[] ? P_1 : never>;
    merge<P>(iterable: AsyncIterable<P>): IterUtilImpl<T, T | P>;
    skip(offset: number): IterUtilImpl<T, T>;
    take(limit: number): IterUtilImpl<T, T>;
    concat<P>(...iterables: AsyncIterable<P>[]): IterUtilImpl<T | P, T | P>;
    map<P>(f: (i: T) => P | Promise<P>): IterUtilImpl<T, P>;
    filter(f: (i: T) => boolean | Promise<boolean>): IterUtilImpl<T, T>;
    tap(f: (i: T) => void): IterUtilImpl<T, T>;
    first(): Promise<T | undefined>;
    last(): Promise<T | undefined>;
    toArray(): Promise<T[]>;
    forEach(f: (i: T) => void | Promise<void>): Promise<void>;
}
