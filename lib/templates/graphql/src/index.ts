import { run } from 'jokio'
import { graphql } from 'jokio-graphql'
import localSchemas from './schemas'

const port = parseInt(process.env.PORT, 10) | 3000
const endpoint = '/'
const logSuccessMessage = ({ port, endpoint }) => () => console.log(`GraphQL server started at http://localhost:${port}${endpoint}`)

run(
    graphql({ port, localSchemas, endpoint }),
    logSuccessMessage({ port, endpoint })
)
