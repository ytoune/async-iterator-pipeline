"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.skip = (skip) => async function* (iter) {
    let count = 0;
    for await (const v of iter) {
        if (++count <= skip)
            continue;
        yield v;
    }
};
