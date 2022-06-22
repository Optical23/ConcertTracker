const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        full_name: String
        email: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
    }

    type Mutation {
        addUser(full_name: String!, email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;