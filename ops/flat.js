"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flat = async function* (iter) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    for await (const v of iter) {
        if (Array.isArray(v))
            for (const p of v)
                yield p;
        else
            yield v;
    }
};
exports.default = exports.flat;
