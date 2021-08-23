const { ApolloServer, gql } = require('apollo-server');
const {
  ApolloServerPluginLandingPageGraphQLPlayground
} = require('apollo-server-core');
const {
  getUserData,
  getUserByCohort,
  addUser,
  deleteUserById
} = require('./util-model');

const typeDefs = gql`
  type Query {
    getUserById(uid: Int): [User]
    getUserByCohort(cohort_num: Int): [User]
  }
  type Mutation {
    addUser(input: AddUserInput): Boolean
    deleteUserById(uid: Int): Boolean
  }
  type User {
    uid: Int!
    name: String
    cohort_num: Int
  }
  input AddUserInput {
    name: String!
    cohort_num: Int
  }
`;

const resolvers = {
  User: {
    name: (parent) => {
      console.log(parent.name);
      return parent.name.toUpperCase();
    }
  },
  Query: {
    getUserById: (parent, args, context, info) => getUserData(args.uid),
    getUserByCohort: (parent, args, context, info) =>
      getUserByCohort(args.cohort_num)
  },
  Mutation: {
    addUser: (parent, args, context, info) => {
      const { name, cohort_num } = args.input;
      return addUser(name, cohort_num);
    },
    deleteUserById: (parent, args, context, info) => deleteUserById(args.uid)
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
