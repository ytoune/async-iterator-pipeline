interface EventEmitter {
    on(event: string | symbol, listener: (arg: any) => void): this;
    off(event: string | symbol, listener: (arg: any) => void): this;
}
export declare function fromEventEmitter<Event>(target: EventEmitter, type: string | symbol): AsyncIterable<Event>;
export default fromEventEmitter;
