import { IterUtilImpl } from './IterUtilImpl'

export class IterUtil<T> extends IterUtilImpl<T, T> {
	constructor(list: AsyncIterable<T>) {
		super(list, Unit)
	}
}

const Unit = <T>(i: T) => i
