interface AddEventListenerOptions extends EventListenerOptions {
    once?: boolean;
    passive?: boolean;
}
interface EventListenerOptions {
    capture?: boolean;
}
interface EventListener<Event> {
    (evt: Event): void;
}
interface EventTarget<Event> {
    addEventListener(type: string, listener: EventListener<Event>, options?: boolean | AddEventListenerOptions): void;
    removeEventListener(type: string, listener: EventListener<Event>, options?: boolean | EventListenerOptions): void;
}
declare type Options = AddEventListenerOptions;
export declare function fromEvent<Event>(target: EventTarget<Event>, type: string, options?: Options): AsyncIterable<Event>;
export default fromEvent;
