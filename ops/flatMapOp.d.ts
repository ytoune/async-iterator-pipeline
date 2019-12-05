export declare const flatMapOp: <T, P>(f: (i: T) => P[] | Promise<P[]>) => (iter: AsyncIterator<T, any, undefined>) => {
    next(): Promise<IteratorResult<P, any>>;
};
