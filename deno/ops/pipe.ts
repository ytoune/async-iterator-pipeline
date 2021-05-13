interface MapFn<T, P> {
	(iter: T): P
}

interface Pipe {
	<T, P>(op: (it: T) => P): MapFn<T, P>
	<T, P, P2>(op: (it: T) => P, op2: (it: P) => P2): MapFn<T, P2>
	<T, P, P2, P3>(
		op: (it: T) => P,
		op2: (it: P) => P2,
		op3: (it: P2) => P3,
	): MapFn<T, P3>
	<T, P, P2, P3, P4>(
		op: (it: T) => P,
		op2: (it: P) => P2,
		op3: (it: P2) => P3,
		op4: (it: P3) => P4,
	): MapFn<T, P4>
	<T, P, P2, P3, P4, P5>(
		op: (it: T) => P,
		op2: (it: P) => P2,
		op3: (it: P2) => P3,
		op4: (it: P3) => P4,
		op5: (it: P4) => P5,
	): MapFn<T, P5>
	<T, P, P2, P3, P4, P5, P6>(
		op: (it: T) => P,
		op2: (it: P) => P2,
		op3: (it: P2) => P3,
		op4: (it: P3) => P4,
		op5: (it: P4) => P5,
		op6: (it: P5) => P6,
	): MapFn<T, P6>
	<T, P, P2, P3, P4, P5, P6, P7>(
		op: (it: T) => P,
		op2: (it: P) => P2,
		op3: (it: P2) => P3,
		op4: (it: P3) => P4,
		op5: (it: P4) => P5,
		op6: (it: P5) => P6,
		op7: (it: P6) => P7,
	): MapFn<T, P7>
	<T, P, P2, P3, P4, P5, P6, P7, P8>(
		op: (it: T) => P,
		op2: (it: P) => P2,
		op3: (it: P2) => P3,
		op4: (it: P3) => P4,
		op5: (it: P4) => P5,
		op6: (it: P5) => P6,
		op7: (it: P6) => P7,
		op8: (it: P7) => P8,
	): MapFn<T, P8>
	<T, P, P2, P3, P4, P5, P6, P7, P8, P9>(
		op: (it: T) => P,
		op2: (it: P) => P2,
		op3: (it: P2) => P3,
		op4: (it: P3) => P4,
		op5: (it: P4) => P5,
		op6: (it: P5) => P6,
		op7: (it: P6) => P7,
		op8: (it: P7) => P8,
		op9: (it: P8) => P9,
	): MapFn<T, P9>
	<T, P, P2, P3, P4, P5, P6, P7, P8, P9, P10>(
		op: (it: T) => P,
		op2: (it: P) => P2,
		op3: (it: P2) => P3,
		op4: (it: P3) => P4,
		op5: (it: P4) => P5,
		op6: (it: P5) => P6,
		op7: (it: P6) => P7,
		op8: (it: P7) => P8,
		op9: (it: P8) => P9,
		op10: (it: P9) => P10,
	): MapFn<T, P10>
	<T, P, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11>(
		op: (it: T) => P,
		op2: (it: P) => P2,
		op3: (it: P2) => P3,
		op4: (it: P3) => P4,
		op5: (it: P4) => P5,
		op6: (it: P5) => P6,
		op7: (it: P6) => P7,
		op8: (it: P7) => P8,
		op9: (it: P8) => P9,
		op10: (it: P9) => P10,
		op11: (it: P10) => P11,
	): MapFn<T, P11>
	<T, P, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12>(
		op: (it: T) => P,
		op2: (it: P) => P2,
		op3: (it: P2) => P3,
		op4: (it: P3) => P4,
		op5: (it: P4) => P5,
		op6: (it: P5) => P6,
		op7: (it: P6) => P7,
		op8: (it: P7) => P8,
		op9: (it: P8) => P9,
		op10: (it: P9) => P10,
		op11: (it: P10) => P11,
		op12: (it: P11) => P12,
	): MapFn<T, P12>
	<T, P, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13>(
		op: (it: T) => P,
		op2: (it: P) => P2,
		op3: (it: P2) => P3,
		op4: (it: P3) => P4,
		op5: (it: P4) => P5,
		op6: (it: P5) => P6,
		op7: (it: P6) => P7,
		op8: (it: P7) => P8,
		op9: (it: P8) => P9,
		op10: (it: P9) => P10,
		op11: (it: P10) => P11,
		op12: (it: P11) => P12,
		op13: (it: P12) => P13,
	): MapFn<T, P13>
	<T, P, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, P14>(
		op: (it: T) => P,
		op2: (it: P) => P2,
		op3: (it: P2) => P3,
		op4: (it: P3) => P4,
		op5: (it: P4) => P5,
		op6: (it: P5) => P6,
		op7: (it: P6) => P7,
		op8: (it: P7) => P8,
		op9: (it: P8) => P9,
		op10: (it: P9) => P10,
		op11: (it: P10) => P11,
		op12: (it: P11) => P12,
		op13: (it: P12) => P13,
		op14: (it: P13) => P14,
	): MapFn<T, P14>
	<T, P, P2, P3, P4, P5, P6, P7, P8, P9, P10, P11, P12, P13, P14, P15>(
		op: (it: T) => P,
		op2: (it: P) => P2,
		op3: (it: P2) => P3,
		op4: (it: P3) => P4,
		op5: (it: P4) => P5,
		op6: (it: P5) => P6,
		op7: (it: P6) => P7,
		op8: (it: P7) => P8,
		op9: (it: P8) => P9,
		op10: (it: P9) => P10,
		op11: (it: P10) => P11,
		op12: (it: P11) => P12,
		op13: (it: P12) => P13,
		op14: (it: P13) => P14,
		op15: (it: P14) => P15,
	): MapFn<T, P15>
	<P = unknown>(...ops: ((it: P) => P)[]): MapFn<P, P>
}

export const pipe: Pipe =
	<P = unknown>(...ops: ((it: P) => P)[]): MapFn<P, P> =>
	(iter: P) => {
		// @ts-ignore
		let tmp: P = iter
		for (const op of ops) tmp = op(tmp)
		return tmp
	}

export default pipe
