export declare const skipOp: <T>(offset: number) => (iter: AsyncIterator<T, any, undefined>) => {
    next(): Promise<IteratorResult<T, any>>;
};
