export declare class AsyncIterableFactory<T> implements AsyncIterable<T> {
    private readonly fact;
    constructor(fact: (idx: number) => Promise<T>);
    [Symbol.asyncIterator](): {
        next(): Promise<IteratorResult<T, any>>;
    };
}
