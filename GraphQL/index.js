const { ApolloServer, gql } = require('apollo-server');
const {
  ApolloServerPluginLandingPageGraphQLPlayground
} = require('apollo-server-core');

const typeDefs = gql`
  type Query {
    // todo
  }
  type Mutation {
    // todo
  }
  // todo
`;

const resolvers = {
  Query: {
    // todo
  },
  Mutation: {
    // todo
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground]
});

server.listen().then(({ url }) => {
  console.log(`graphql server is running on ${url}`);
});
