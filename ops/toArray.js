"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toArray = void 0;
const toArray = () => async (iter) => {
    const list = [];
    for await (const i of iter)
        list.push(i);
    return list;
};
exports.toArray = toArray;
exports.default = exports.toArray;
