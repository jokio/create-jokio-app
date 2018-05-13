const typeDefs = `
	extend type Query {
		hello: String!
	}
`

const resolvers = {
	Query: {
		hello: () => 'World'
	}
}

export default {
	typeDefs,
	resolvers
}
