"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AsyncIterableFactory {
    constructor(fact) {
        this.fact = fact;
    }
    async *[Symbol.asyncIterator]() {
        const { fact } = this;
        for (let idx = 0;; ++idx)
            yield await fact(idx);
    }
}
exports.AsyncIterableFactory = AsyncIterableFactory;
