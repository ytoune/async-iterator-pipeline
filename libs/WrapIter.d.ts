export declare class WrapIter<T> {
    private readonly iter;
    cur: number;
    done: boolean;
    constructor(iter: AsyncIterator<T>);
    next(): Promise<IteratorResult<T, any>>;
}
