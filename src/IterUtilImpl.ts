import { flatMapOp } from './ops/flatMapOp'
import { mergeOp } from './ops/mergeOp'
import { skipOp } from './ops/skipOp'
import { takeOp } from './ops/takeOp'

export class IterUtilImpl<S, T> implements AsyncIterable<T> {
	constructor(
		private readonly list: AsyncIterable<S>,
		private readonly mapiter: (iter: AsyncIterator<S>) => AsyncIterator<T>,
	) {}
	[Symbol.asyncIterator]() {
		return this.mapiter(this.list[Symbol.asyncIterator]())
	}
	flatMap<P>(f: (i: T) => P[] | Promise<P[]>) {
		return new IterUtilImpl(this, flatMapOp(f))
	}
	flat() {
		type P = T extends (infer P)[] ? P : never
		return this.flatMap<P>((i: unknown) => i as P[])
	}
	merge<P>(iterable: AsyncIterable<P>) {
		return new IterUtilImpl(this, mergeOp(iterable))
	}
	skip(offset: number) {
		return new IterUtilImpl(this, skipOp(offset))
	}
	take(limit: number) {
		return new IterUtilImpl(this, takeOp(limit))
	}
	concat<P>(...iterables: AsyncIterable<P>[]) {
		let tmp = this as IterUtilImpl<unknown, unknown>
		for (const i of iterables) tmp = tmp.merge(i)
		return tmp as IterUtilImpl<T | P, T | P>
	}
	map<P>(f: (i: T) => P | Promise<P>) {
		const f2 = async (i: T) => [await f(i)]
		return new IterUtilImpl(this, flatMapOp(f2))
	}
	filter(f: (i: T) => boolean | Promise<boolean>) {
		const f2 = async (i: T) => ((await f(i)) ? [i] : [])
		return new IterUtilImpl(this, flatMapOp(f2))
	}
	tap(f: (i: T) => void) {
		const f2 = async (i: T) => (await f(i), [i])
		return new IterUtilImpl(this, flatMapOp(f2))
	}
	async first() {
		for await (const i of this) return i
	}
	async last() {
		let l: T | undefined
		for await (const i of this) l = i
		return l
	}
	async toArray() {
		const list: T[] = []
		for await (const i of this) list.push(i)
		return list
	}
	async forEach(f: (i: T) => void | Promise<void>) {
		for await (const i of this) await f(i)
	}
}
