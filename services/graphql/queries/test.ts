import gql from 'graphql-tag';

const JOBS_QUERY = gql`
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

export default JOBS_QUERY;
