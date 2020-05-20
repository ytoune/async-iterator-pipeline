"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chunk = void 0;
exports.chunk = (size) => async function* (iter) {
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
exports.default = exports.chunk;
