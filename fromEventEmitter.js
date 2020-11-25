"use strict";
/* eslint-disable @typescript-eslint/no-non-null-assertion */
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromEventEmitter = void 0;
async function* fromEventEmitter(target, type) {
    const queue = [];
    const handle = (event) => {
        queue.unshift(event);
        res === null || res === void 0 ? void 0 : res();
    };
    target.on(type, handle);
    let res;
    try {
        for (;;) {
            await new Promise(r => (res = r));
            while (queue.length)
                yield queue.pop();
        }
    }
    finally {
        target.off(type, handle);
    }
}
exports.fromEventEmitter = fromEventEmitter;
exports.default = fromEventEmitter;
