"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toArray = void 0;
exports.toArray = () => async (iter) => {
    const list = [];
    for await (const i of iter)
        list.push(i);
    return list;
};
exports.default = exports.toArray;
