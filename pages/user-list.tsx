import React from 'react';
import Head from 'next/head';
import { useQuery } from '@apollo/react-hooks';

import AdminLayout from '@components/AdminLayout/Layout';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import '@public/css/styles.css';

import JOBS_QUERY from '@services/graphql/queries/test';
import UserList from '@src/Users/User-List';

const submit = (): void => {
    console.log('Submit Button Clicked');
};

const UsersList = (): JSX.Element => {
    const { data, loading, error } = useQuery(JOBS_QUERY);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{`Error: ${JSON.stringify(error)}`}</p>;
    }

    const tableConfig = [
        {
            id: {
                title: 'id',
                type: 'number',
            },
            title: {
                title: 'Title',
            },
            company: {
                title: 'Company',
                valuePrepareFunction(cell: any): string {
                    return cell.name;
                },
            },
            website: {
                title: 'Website',
                valuePrepareFunction(cell: any, row: any): string {
                    return row.company.websiteUrl;
                },
            },
            actions: {
                title: 'Actions',
                items: [
                    {
                        title: 'View',
                        redirectTo: {
                            url: 'user-detail',
                        },
                    },
                    {
                        title: 'Delete',
                        onClick: submit,
                    },
                ],
            },
        },
    ];

    return (
        <>
            <Head>
                <title>User List</title>
            </Head>
            <AdminLayout>
                <UserList data={data.jobs} tableConfig={tableConfig} />
            </AdminLayout>
        </>
    );
};

export default UsersList;
