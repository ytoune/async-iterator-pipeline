# async-iterator-pipeline

```sh
yarn add github:ytoune/async-iterator-pipeline#semver:v3.x
```

```ts
import { iterutil } from 'async-iterator-pipeline'
import { map, take, skip, filter } from 'async-iterator-pipeline/ops'

const create = async function* () {
  for (let i = 0; ; ++i) yield i
}

for await (const num of iterutil(create()).pipe(skip(3), take(4))) {
  console.log(num) // 3, 4, 5, 6
}

await iterutil(create())
  .pipe(
    filter(i => 0 === i % 2), // 0, 2, 4, 6 ...
    map(i => i * 2), // 0, 4, 8, 12 ...
    skip(2), // 8, 12, 16, 20 ...
    take(3), // 8, 12, 16
  )
  .forEach(async i => {
    console.log(i)
  })
```

```ts
import { AsyncIteratorPipeline, AsyncIterableFactory } from 'async-iterator-pipeline'
import { concat, map, take, tap, flatMap, skip, filter } from 'async-iterator-pipeline/ops'

const iterable1: AsyncIterable<number> =
  new AsyncIterableFactory(async (idx: number) => idx)
const iterable2: AsyncIterable<string> =
  new AsyncIterableFactory(async (idx: number) => `${idx}`)

const iterable3: AsyncIterable<number[]> =
  new AsyncIteratorPipeline(iterable1).map(num => [num])

const iterable4: AsyncIterable<number | string | number[]> =
  new AsyncIteratorPipeline(iterable1)
    .pipe(concat<string | number[]>(iterable2, iterable3))

for await (const num of new AsyncIteratorPipeline(iterable1).pipe(skip(3), take(4))) {
  console.log(num) // 3, 4, 5, 6
}

await new AsyncIteratorPipeline(iterable1)
  .pipe(
    map(num => 1 + num),
    take(3),
    tap(num => console.log(num)), // 1, 2, 3
    flatMap(num => [num, num]),
    tap(num => console.log(num)), // 1, 1, 2, 2, 3, 3
    skip(3),
    concat(new AsyncIteratorPipeline(iterable2).take(2)),
    tap(val => console.log(val)), // 2, 3, 3, '0', '1'
    filter(val => 3 !== val),
  )
  .forEach(val => {
    console.log(val) // 2, '0', '1'
  })

const list: number[] = await new AsyncIteratorPipeline(iterable1).toArray()
```
