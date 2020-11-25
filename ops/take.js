"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.take = void 0;
const take = (take) => async function* (iter) {
    let count = 0;
    if (take <= count)
        return;
    for await (const v of iter) {
        yield v;
        if (take <= ++count)
            break;
    }
};
exports.take = take;
exports.default = exports.take;
