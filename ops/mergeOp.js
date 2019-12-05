"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeOp = (iterable) => (iter) => {
    let it = iter;
    let done = false;
    let flag = true;
    return {
        async next() {
            while (!done) {
                const r = await it.next();
                if (!r.done)
                    return r;
                if (flag) {
                    flag = false;
                    it = iterable[Symbol.asyncIterator]();
                    continue;
                }
                done = true;
            }
            return { done, value: undefined };
        },
    };
};
