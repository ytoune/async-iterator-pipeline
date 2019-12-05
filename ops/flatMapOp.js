"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flatMapOp = (f) => (iter) => {
    const cur = [];
    let done = false;
    return {
        async next() {
            while (!done && !cur.length) {
                const r = await iter.next();
                if (r.done) {
                    done = true;
                }
                else {
                    for (const value of asArray(await f(r.value)))
                        cur.push({ done: false, value });
                }
            }
            if (done)
                return { done: true, value: undefined };
            return cur.shift();
        },
    };
};
const asArray = (v) => {
    if (Array.isArray(v))
        return v;
    return [v];
};
