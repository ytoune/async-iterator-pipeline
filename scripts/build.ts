import { remove, readFile, writeFile, ensureDir } from 'fs-extra'
import { join, dirname } from 'path'
import { spawn } from 'child_process'
import klaw from 'klaw'

const main = async () => {
	await remove(join(__dirname, '..', 'dist')).catch(ignoreNoEntry)
	await compile()
	await copy()
}

const compile = () =>
	new Promise<void>(async (resolve, reject) => {
		const ls = spawn('tsc', ['--build', 'tsconfig.build.json'], {
			cwd: process.cwd(),
		})
		ls.stdout.on('data', data => console.log(data))
		ls.stderr.on('data', data => console.error(data))
		ls.on('close', code => {
			code
				? reject(new Error(`child process exited with code ${code}`))
				: resolve()
		})
	})

const copy = async () => {
	const src = join(__dirname, '../src')
	const dist = join(__dirname, '../dist/deno')
	for await (const file of klaw(src)) {
		if (!file.stats.isFile()) continue
		const target: string = file.path.replace(src, dist)
		const content = await readFile(file.path, 'utf8')
		const newcontent = content.replace(
			/((?:import|export)[\s\S]+?from[\s]*)('[^']+'|"[^"]+")/gisu,
			(_, p, s) => p + s.replace(/('|")$/iu, '.ts$1'),
		)
		await ensureDir(dirname(target))
		await writeFile(target, newcontent)
	}
}

const ignoreNoEntry = (x: { code?: string }) =>
	'ENOENT' === x?.code || Promise.reject(x)

main().catch(x => {
	console.error(x)
	process.exit(1)
})
