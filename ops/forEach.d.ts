export declare const forEach: <T>(f: (i: T) => void | Promise<void>) => (iter: AsyncIterable<T>) => Promise<void>;
export default forEach;
