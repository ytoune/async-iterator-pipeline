export declare class AsyncIterableFactory<T> implements AsyncIterable<T> {
    private readonly fact;
    constructor(fact: (idx: number) => Promise<T>);
    [Symbol.asyncIterator](): AsyncGenerator<T, void, unknown>;
}
export default AsyncIterableFactory;
