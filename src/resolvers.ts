import { IResolvers } from "graphql-yoga/dist/src/types"

export const resolvers: ResolverMap = {
    Query: {
        ping: () => 'pong',
    },
    Mutation: {
        register: (_, { email, password }: GQL.IRegisterOnMutationArguments) => {}
    }
}