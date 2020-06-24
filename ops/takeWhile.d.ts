export declare const takeWhile: <T>(f: (i: T) => boolean | Promise<boolean>) => (iter: AsyncIterable<T>) => AsyncIterable<T>;
export default takeWhile;
