"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WrapIter_1 = require("../libs/WrapIter");
exports.takeOp = (limit) => (iter) => {
    const it = new WrapIter_1.WrapIter(iter);
    return {
        async next() {
            if (it.done || limit <= it.cur++)
                return { done: true, value: undefined };
            const r = await it.next();
            if (r.done)
                it.done = true;
            return r;
        },
    };
};
