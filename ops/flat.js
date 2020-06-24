"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flat = void 0;
exports.flat = (depth = 1) => async function* (iter) {
    for await (const v of iter) {
        if (Array.isArray(v)) {
            const flattend = [];
            flatarr(v, depth - 1, flattend);
            for (const p of flattend)
                yield p;
        }
        else
            yield v;
    }
};
exports.default = exports.flat;
const flatarr = (array, depth, flattend) => {
    for (const el of array) {
        if (Array.isArray(el) && depth > 0) {
            flatarr(el, depth - 1, flattend);
        }
        else {
            flattend.push(el);
        }
    }
};
