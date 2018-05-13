import { run } from 'jokio'
import { graphql } from 'jokio-graphql'
import { express, nextjs } from 'jokio-nextjs'

import localSchemas from './schemas'

const port = parseInt(process.env.PORT, 10) || 3000
const endpoint = '/graphql'

run(
    express({ port, autoStart: false }),
    graphql({ localSchemas, endpoint }),
    nextjs({ pagesDirectory: 'src' }),
)
