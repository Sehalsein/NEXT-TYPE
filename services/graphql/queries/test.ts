import gql from 'graphql-tag';

export const JOBS_QUERY = gql`
    query Jobs {
        jobs {
            id
            title
            company {
                name
                websiteUrl
            }
        }
    }
`;

export const CITY = gql`
    query city {
        city(input: { slug: "berlin" }) {
            id
            name
            type
            slug
            country {
                name
            }
            createdAt
            updatedAt
        }
    }
`;

export const COUNTRIES = gql`
    query countries {
        countries {
            id
            name
            type
            slug
            isoCode
            createdAt
            updatedAt
        }
    }
`;

export const CITIES = gql`
    query cities {
        cities {
            id
            name
            type
            slug
            createdAt
            updatedAt
        }
    }
`;
