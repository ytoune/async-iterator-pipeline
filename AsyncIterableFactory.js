"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AsyncIterableFactory {
    constructor(fact) {
        this.fact = fact;
    }
    [Symbol.asyncIterator]() {
        let idx_ = 0;
        const { fact } = this;
        return {
            async next() {
                const idx = idx_++;
                return { done: false, value: await fact(idx) };
            },
        };
    }
}
exports.AsyncIterableFactory = AsyncIterableFactory;
