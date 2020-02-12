import React from 'react';
import PropTypes from 'prop-types';
import { COUNTRIES } from '@services/graphql/queries/test';
import { useQuery } from '@apollo/react-hooks';
import TableBuilder from '@components/TableBuilder/TableBuilder';
import ButtonComponent from '@components/FormComponents/ButtonComponent';

const UserTab = (props): JSX.Element => {
    const { title, onViewChange } = props;

    const { data, loading, error } = useQuery(COUNTRIES);

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

    return (
        <>
            <ButtonComponent
                title="Add Country"
                onClick={() => {
                    onViewChange(1);
                }}
                status="primary"
            />

            <TableBuilder columns={columns} data={data.countries} rowKey="id" />
        </>
    );
};

UserTab.defaultProps = {
    onViewChange: (): void => {},
};

UserTab.propTypes = {
    title: PropTypes.string.isRequired,
    onViewChange: PropTypes.func,
};

export default UserTab;
