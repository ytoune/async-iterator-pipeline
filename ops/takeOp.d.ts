export declare const takeOp: <T>(limit: number) => (iter: AsyncIterator<T, any, undefined>) => {
    next(): Promise<IteratorResult<T, any>>;
};
