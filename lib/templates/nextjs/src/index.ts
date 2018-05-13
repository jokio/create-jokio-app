import { run } from 'jokio'
import { express, nextjs } from 'jokio-nextjs'

const port = parseInt(process.env.PORT, 10) || 3000

run(
    express({ port }),
    nextjs({ pagesDirectory: 'src' })
)
