interface EventEmitter {
    on(event: string | symbol, listener: (arg: any) => void): this;
    off(event: string | symbol, listener: (arg: any) => void): this;
}
export declare const fromEventEmitter: <Event>(target: EventEmitter, type: string | symbol) => AsyncIterable<Event>;
export default fromEventEmitter;
