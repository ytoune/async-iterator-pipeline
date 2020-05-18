export declare const map: <T, P>(f: (i: T) => P | Promise<P>) => (iter: AsyncIterable<T>) => AsyncIterable<P>;
