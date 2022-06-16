import "reflect-metadata";
import { loadSchemaSync } from '@graphql-tools/load'
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader'
import { addResolversToSchema } from '@graphql-tools/schema'
import { createServer } from '@graphql-yoga/node'
import { resolvers } from "./resolvers";

// Provide your schema
const server = createServer({
  schema: {
    typeDefs: `
      
    `,
  },
})

// Start the server and explore http://localhost:4000/graphql
server.start()