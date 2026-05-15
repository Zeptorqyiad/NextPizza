import { spawn } from 'node:child_process'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const envFile = readFileSync(resolve(process.cwd(), '.env'), 'utf8')
const databaseUrlLine = envFile
    .split(/\r?\n/)
    .find((line) => line.trim().startsWith('DATABASE_URL='))

if (!databaseUrlLine) {
    console.error('DATABASE_URL is missing in .env')
    process.exit(1)
}

const databaseUrl = databaseUrlLine
    .replace(/^DATABASE_URL=/, '')
    .trim()
    .replace(/^["']|["']$/g, '')

const prismaCli = resolve(process.cwd(), 'node_modules/prisma/build/index.js')
const studio = spawn(
    process.execPath,
    [prismaCli, 'studio', `--url=${databaseUrl}`, '--port', '5557'],
    {
        stdio: 'inherit',
    },
)

studio.on('exit', (code) => {
    process.exit(code ?? 0)
})
