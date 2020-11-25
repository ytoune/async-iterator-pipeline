"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chunk = void 0;
const chunk = (size) => async function* (iter) {
    let buf = [];
    for await (const v of iter) {
        buf.push(v);
        if (buf.length < size)
            continue;
        yield buf;
        buf = [];
    }
    if (buf.length)
        yield buf;
};
exports.chunk = chunk;
exports.default = exports.chunk;
