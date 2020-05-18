export declare const tap: <T>(f: (i: T) => void | Promise<void>) => (iter: AsyncIterable<T>) => AsyncIterable<T>;
