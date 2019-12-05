"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WrapIter_1 = require("../libs/WrapIter");
exports.skipOp = (offset) => (iter) => {
    const it = new WrapIter_1.WrapIter(iter);
    return {
        async next() {
            while (!it.done && ++it.cur <= offset)
                await it.next();
            if (it.done)
                return { done: true, value: undefined };
            return await it.next();
        },
    };
};
