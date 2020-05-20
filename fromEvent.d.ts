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
export declare const fromEvent: <Event>(target: EventTarget<Event>, type: string, options?: AddEventListenerOptions | undefined) => AsyncIterable<Event>;
export default fromEvent;
