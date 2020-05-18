export declare const filter: <T>(f: (i: T) => boolean | Promise<boolean>) => (iter: AsyncIterable<T>) => AsyncIterable<T>;
