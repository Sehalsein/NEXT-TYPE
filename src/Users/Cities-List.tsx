import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import { CITIES } from '@services/graphql/queries/test';
import TableBuilder from '@components/TableBuilder/TableBuilder';

const CitiesList = (props): JSX.Element => {
    const { title } = props;

    const { data, loading, error } = useQuery(CITIES);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{`Error: ${JSON.stringify(error)}`}</p>;
    }

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Slug',
            dataIndex: 'slug',
            key: 'slug',
        },
    ];

    return <TableBuilder columns={columns} data={data.cities} rowKey="id" />;
};

CitiesList.defaultProps = {
    onViewChange: (): void => {},
};

CitiesList.propTypes = {
    title: PropTypes.string.isRequired,
    onViewChange: PropTypes.func,
};

export default CitiesList;
