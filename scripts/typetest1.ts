import { iterutil } from '../src'
import { map } from '../src/ops/map'
import { filter } from '../src/ops/filter'
import { take } from '../src/ops/take'
import { skip } from '../src/ops/skip'
import { concat } from '../src/ops/concat'

export const main = async () => {
	const create = async function* () {
		let i = 0
		try {
			for (; i < 100; ++i) yield i
		} finally {
			console.log({ i })
		}
	}
	await iterutil(create())
		.pipe(
			filter(i => 0 === i % 2),
			map(i => 'i = ' + (i + 1)),
			skip(3),
			take(5),
			concat(
				iterutil(create()).pipe(
					map(i => 'u = ' + i * 2),
					take(4),
				),
			),
		)
		.forEach(async v => {
			console.log(v)
		})
}

main().then(
	() => console.log('done!'),
	x => {
		console.error(x)
		process.exit(1)
	},
)
