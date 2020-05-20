"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromEvent = void 0;
exports.fromEvent = (target, type, options) => {
    const { once, passive, capture } = options || {};
    const add = options && { once, passive, capture };
    const remove = null == capture ? undefined : { capture };
    const iterable = {
        [Symbol.asyncIterator]: () => {
            const queue = [];
            const pins = [];
            let done = false;
            const handle = (event) => {
                pins.length ? pins.pop()(event) : queue.unshift(event);
            };
            target.addEventListener(type, handle, add);
            const next = async () => {
                if (done)
                    return { done: true, value: undefined };
                const value = queue.pop();
                if (value)
                    return { done: false, value };
                return { done: false, value: await new Promise(r => pins.unshift(r)) };
            };
            const close = async () => {
                done = true;
                target.removeEventListener(type, handle, remove);
                return { done: true, value: undefined };
            };
            return {
                next,
                return: close,
                throw: close,
            };
        },
    };
    return iterable;
};
exports.default = exports.fromEvent;
