export class IterUtilImpl<T> implements AsyncIterable<T> {
	constructor(private readonly _list: AsyncIterable<T>) {}
	[Symbol.asyncIterator]() {
		return this._list[Symbol.asyncIterator]()
	}
	async first() {
		for await (const i of this._list) return i
	}
	async last() {
		let l: T | undefined
		for await (const i of this._list) l = i
		return l
	}
	async toArray() {
		const list: T[] = []
		for await (const i of this._list) list.push(i)
		return list
	}
	async forEach(f: (i: T) => void | Promise<void>) {
		for await (const i of this._list) await f(i)
	}
	pipe<P>(op: (it: AsyncIterable<T>) => AsyncIterable<P>): IterUtilImpl<P>
	pipe<P, P2>(
		op: (it: AsyncIterable<T>) => AsyncIterable<P>,
		op2: (it: AsyncIterable<P>) => AsyncIterable<P2>,
	): IterUtilImpl<P2>
	pipe<P, P2, P3>(
		op: (it: AsyncIterable<T>) => AsyncIterable<P>,
		op2: (it: AsyncIterable<P>) => AsyncIterable<P2>,
		op3: (it: AsyncIterable<P2>) => AsyncIterable<P3>,
	): IterUtilImpl<P3>
	pipe<P, P2, P3, P4>(
		op: (it: AsyncIterable<T>) => AsyncIterable<P>,
		op2: (it: AsyncIterable<P>) => AsyncIterable<P2>,
		op3: (it: AsyncIterable<P2>) => AsyncIterable<P3>,
		op4: (it: AsyncIterable<P3>) => AsyncIterable<P4>,
	): IterUtilImpl<P4>
	pipe<P, P2, P3, P4, P5>(
		op: (it: AsyncIterable<T>) => AsyncIterable<P>,
		op2: (it: AsyncIterable<P>) => AsyncIterable<P2>,
		op3: (it: AsyncIterable<P2>) => AsyncIterable<P3>,
		op4: (it: AsyncIterable<P3>) => AsyncIterable<P4>,
		op5: (it: AsyncIterable<P4>) => AsyncIterable<P5>,
	): IterUtilImpl<P5>
	pipe<P, P2, P3, P4, P5, P6>(
		op: (it: AsyncIterable<T>) => AsyncIterable<P>,
		op2: (it: AsyncIterable<P>) => AsyncIterable<P2>,
		op3: (it: AsyncIterable<P2>) => AsyncIterable<P3>,
		op4: (it: AsyncIterable<P3>) => AsyncIterable<P4>,
		op5: (it: AsyncIterable<P4>) => AsyncIterable<P5>,
		op6: (it: AsyncIterable<P5>) => AsyncIterable<P6>,
	): IterUtilImpl<P6>
	pipe<P, P2, P3, P4, P5, P6, P7>(
		op: (it: AsyncIterable<T>) => AsyncIterable<P>,
		op2: (it: AsyncIterable<P>) => AsyncIterable<P2>,
		op3: (it: AsyncIterable<P2>) => AsyncIterable<P3>,
		op4: (it: AsyncIterable<P3>) => AsyncIterable<P4>,
		op5: (it: AsyncIterable<P4>) => AsyncIterable<P5>,
		op6: (it: AsyncIterable<P5>) => AsyncIterable<P6>,
		op7: (it: AsyncIterable<P6>) => AsyncIterable<P7>,
	): IterUtilImpl<P7>
	pipe<P, P2, P3, P4, P5, P6, P7, P8>(
		op: (it: AsyncIterable<T>) => AsyncIterable<P>,
		op2: (it: AsyncIterable<P>) => AsyncIterable<P2>,
		op3: (it: AsyncIterable<P2>) => AsyncIterable<P3>,
		op4: (it: AsyncIterable<P3>) => AsyncIterable<P4>,
		op5: (it: AsyncIterable<P4>) => AsyncIterable<P5>,
		op6: (it: AsyncIterable<P5>) => AsyncIterable<P6>,
		op7: (it: AsyncIterable<P6>) => AsyncIterable<P7>,
		op8: (it: AsyncIterable<P7>) => AsyncIterable<P8>,
	): IterUtilImpl<P8>
	pipe<P, P2, P3, P4, P5, P6, P7, P8, P9>(
		op: (it: AsyncIterable<T>) => AsyncIterable<P>,
		op2: (it: AsyncIterable<P>) => AsyncIterable<P2>,
		op3: (it: AsyncIterable<P2>) => AsyncIterable<P3>,
		op4: (it: AsyncIterable<P3>) => AsyncIterable<P4>,
		op5: (it: AsyncIterable<P4>) => AsyncIterable<P5>,
		op6: (it: AsyncIterable<P5>) => AsyncIterable<P6>,
		op7: (it: AsyncIterable<P6>) => AsyncIterable<P7>,
		op8: (it: AsyncIterable<P7>) => AsyncIterable<P8>,
		op9: (it: AsyncIterable<P8>) => AsyncIterable<P9>,
	): IterUtilImpl<P9>
	pipe<P, P2, P3, P4, P5, P6, P7, P8, P9, P10>(
		op: (it: AsyncIterable<T>) => AsyncIterable<P>,
		op2: (it: AsyncIterable<P>) => AsyncIterable<P2>,
		op3: (it: AsyncIterable<P2>) => AsyncIterable<P3>,
		op4: (it: AsyncIterable<P3>) => AsyncIterable<P4>,
		op5: (it: AsyncIterable<P4>) => AsyncIterable<P5>,
		op6: (it: AsyncIterable<P5>) => AsyncIterable<P6>,
		op7: (it: AsyncIterable<P6>) => AsyncIterable<P7>,
		op8: (it: AsyncIterable<P7>) => AsyncIterable<P8>,
		op9: (it: AsyncIterable<P8>) => AsyncIterable<P9>,
		op10: (it: AsyncIterable<P9>) => AsyncIterable<P10>,
	): IterUtilImpl<P10>
	pipe<P, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11>(
		op: (it: AsyncIterable<T>) => AsyncIterable<P>,
		op2: (it: AsyncIterable<P>) => AsyncIterable<P2>,
		op3: (it: AsyncIterable<P2>) => AsyncIterable<P3>,
		op4: (it: AsyncIterable<P3>) => AsyncIterable<P4>,
		op5: (it: AsyncIterable<P4>) => AsyncIterable<P5>,
		op6: (it: AsyncIterable<P5>) => AsyncIterable<P6>,
		op7: (it: AsyncIterable<P6>) => AsyncIterable<P7>,
		op8: (it: AsyncIterable<P7>) => AsyncIterable<P8>,
		op9: (it: AsyncIterable<P8>) => AsyncIterable<P9>,
		op10: (it: AsyncIterable<P9>) => AsyncIterable<P10>,
		op11: (it: AsyncIterable<P10>) => AsyncIterable<P11>,
	): IterUtilImpl<P11>
	pipe<P, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12>(
		op: (it: AsyncIterable<T>) => AsyncIterable<P>,
		op2: (it: AsyncIterable<P>) => AsyncIterable<P2>,
		op3: (it: AsyncIterable<P2>) => AsyncIterable<P3>,
		op4: (it: AsyncIterable<P3>) => AsyncIterable<P4>,
		op5: (it: AsyncIterable<P4>) => AsyncIterable<P5>,
		op6: (it: AsyncIterable<P5>) => AsyncIterable<P6>,
		op7: (it: AsyncIterable<P6>) => AsyncIterable<P7>,
		op8: (it: AsyncIterable<P7>) => AsyncIterable<P8>,
		op9: (it: AsyncIterable<P8>) => AsyncIterable<P9>,
		op10: (it: AsyncIterable<P9>) => AsyncIterable<P10>,
		op11: (it: AsyncIterable<P10>) => AsyncIterable<P11>,
		op12: (it: AsyncIterable<P11>) => AsyncIterable<P12>,
	): IterUtilImpl<P12>
	pipe<P, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13>(
		op: (it: AsyncIterable<T>) => AsyncIterable<P>,
		op2: (it: AsyncIterable<P>) => AsyncIterable<P2>,
		op3: (it: AsyncIterable<P2>) => AsyncIterable<P3>,
		op4: (it: AsyncIterable<P3>) => AsyncIterable<P4>,
		op5: (it: AsyncIterable<P4>) => AsyncIterable<P5>,
		op6: (it: AsyncIterable<P5>) => AsyncIterable<P6>,
		op7: (it: AsyncIterable<P6>) => AsyncIterable<P7>,
		op8: (it: AsyncIterable<P7>) => AsyncIterable<P8>,
		op9: (it: AsyncIterable<P8>) => AsyncIterable<P9>,
		op10: (it: AsyncIterable<P9>) => AsyncIterable<P10>,
		op11: (it: AsyncIterable<P10>) => AsyncIterable<P11>,
		op12: (it: AsyncIterable<P11>) => AsyncIterable<P12>,
		op13: (it: AsyncIterable<P12>) => AsyncIterable<P13>,
	): IterUtilImpl<P13>
	pipe<P, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, P14>(
		op: (it: AsyncIterable<T>) => AsyncIterable<P>,
		op2: (it: AsyncIterable<P>) => AsyncIterable<P2>,
		op3: (it: AsyncIterable<P2>) => AsyncIterable<P3>,
		op4: (it: AsyncIterable<P3>) => AsyncIterable<P4>,
		op5: (it: AsyncIterable<P4>) => AsyncIterable<P5>,
		op6: (it: AsyncIterable<P5>) => AsyncIterable<P6>,
		op7: (it: AsyncIterable<P6>) => AsyncIterable<P7>,
		op8: (it: AsyncIterable<P7>) => AsyncIterable<P8>,
		op9: (it: AsyncIterable<P8>) => AsyncIterable<P9>,
		op10: (it: AsyncIterable<P9>) => AsyncIterable<P10>,
		op11: (it: AsyncIterable<P10>) => AsyncIterable<P11>,
		op12: (it: AsyncIterable<P11>) => AsyncIterable<P12>,
		op13: (it: AsyncIterable<P12>) => AsyncIterable<P13>,
		op14: (it: AsyncIterable<P13>) => AsyncIterable<P14>,
	): IterUtilImpl<P14>
	pipe<P, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, P14, P15>(
		op: (it: AsyncIterable<T>) => AsyncIterable<P>,
		op2: (it: AsyncIterable<P>) => AsyncIterable<P2>,
		op3: (it: AsyncIterable<P2>) => AsyncIterable<P3>,
		op4: (it: AsyncIterable<P3>) => AsyncIterable<P4>,
		op5: (it: AsyncIterable<P4>) => AsyncIterable<P5>,
		op6: (it: AsyncIterable<P5>) => AsyncIterable<P6>,
		op7: (it: AsyncIterable<P6>) => AsyncIterable<P7>,
		op8: (it: AsyncIterable<P7>) => AsyncIterable<P8>,
		op9: (it: AsyncIterable<P8>) => AsyncIterable<P9>,
		op10: (it: AsyncIterable<P9>) => AsyncIterable<P10>,
		op11: (it: AsyncIterable<P10>) => AsyncIterable<P11>,
		op12: (it: AsyncIterable<P11>) => AsyncIterable<P12>,
		op13: (it: AsyncIterable<P12>) => AsyncIterable<P13>,
		op14: (it: AsyncIterable<P13>) => AsyncIterable<P14>,
		op15: (it: AsyncIterable<P14>) => AsyncIterable<P15>,
	): IterUtilImpl<P15>
	pipe<P = unknown>(
		...ops: ((it: AsyncIterable<P>) => AsyncIterable<P>)[]
	): IterUtilImpl<P>
	pipe<P = unknown>(
		...ops: ((it: AsyncIterable<P>) => AsyncIterable<P>)[]
	): IterUtilImpl<P> {
		// @ts-ignore
		let tmp: AsyncIterable<P> = this._list
		for (const op of ops) tmp = op(tmp)
		return new IterUtilImpl(tmp)
	}
}
