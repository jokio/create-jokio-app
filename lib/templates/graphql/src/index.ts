import { run } from 'jokio'
import { graphql } from 'jokio-graphql'
import localSchemas from './schemas'

const port = parseInt(process.env.PORT, 10) | 3000
const endpoint = '/'
const logSuccessMessage = (info) => () => console.log(`GraphQL server started at http://localhost:${info.port}${info.endpoint}`)

run(
    graphql({ port, localSchemas, endpoint }),
    logSuccessMessage({ port, endpoint }),
)
