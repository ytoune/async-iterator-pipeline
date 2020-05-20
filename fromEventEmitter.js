"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromEventEmitter = void 0;
exports.fromEventEmitter = (target, type) => {
    const iterable = {
        [Symbol.asyncIterator]: () => {
            const queue = [];
            const pins = [];
            let done = false;
            const handle = (event) => {
                pins.length ? pins.pop()(event) : queue.unshift(event);
            };
            target.on(type, handle);
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
                target.off(type, handle);
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
exports.default = exports.fromEventEmitter;
