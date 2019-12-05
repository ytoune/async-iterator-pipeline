import { IterUtilImpl } from './IterUtilImpl';
export declare class IterUtil<T> extends IterUtilImpl<T, T> {
    constructor(list: AsyncIterable<T>);
}
