export declare const flatMap: <T, P>(f: (i: T) => P[] | Promise<P[]>) => (iter: AsyncIterable<T>) => AsyncIterable<P>;
