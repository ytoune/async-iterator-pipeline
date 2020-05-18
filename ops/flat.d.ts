declare type Flatten<T> = T extends (infer P)[] ? P : T;
export declare const flat: <T>(iter: AsyncIterable<T>) => AsyncIterable<Flatten<T>>;
export default flat;
