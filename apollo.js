import {
    ApolloClient,
    InMemoryCache
} from '@apollo/client'

export const apolloClient = new ApolloClient({
    uri: 'https://kampus-merdeka-44.hasura.app/v1/graphql',
    cache: new InMemoryCache(),
    headers: {
        "x-hasura-admin-secret" : "q2IssO2z2sc8l51ynXm6y327KIHyuSgtluEAZB4rIq9sCw8I0eBiu0IiYYB4n3HR"
    }
}
)