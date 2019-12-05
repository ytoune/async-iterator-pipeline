export declare const mergeOp: <T, P>(iterable: AsyncIterable<P>) => (iter: AsyncIterator<T, any, undefined>) => {
    next(): Promise<IteratorResult<T | P, any>>;
};
