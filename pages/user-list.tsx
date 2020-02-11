/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Head from 'next/head';
import { useQuery } from '@apollo/react-hooks';
import { Icon } from 'antd';

import AdminLayout from '@components/AdminLayout/AdminLayout';

import { JOBS_QUERY } from '@services/graphql/queries/test';
import UserList from '@src/Users/User-List';

const submit = (): void => {
    console.log('Submit Button Clicked');
};

const breadCrumbs = [
    { link: '/', title: 'Home' },
    { link: '/user-list', title: 'Ayana Users' },
];

const UsersList = (): JSX.Element => {
    const { data, loading, error } = useQuery(JOBS_QUERY);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{`Error: ${JSON.stringify(error)}`}</p>;
    }

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Company',
            dataIndex: 'company',
            key: 'company',
            render: (company): string => {
                return company.name;
            },
        },
        {
            title: 'Website',
            dataIndex: 'company',
            key: 'companyUrl',
            render: (company): string => {
                return company.websiteUrl;
            },
        },
    ];

    const actions = [
        {
            title: 'View',
            component: <Icon type="file-text" />,
            redirectTo: {
                url: 'user-detail',
                params: ['id'],
            },
        },
        {
            title: 'Delete',
            icon: 'delete',
            onClick: submit,
        },
    ];

    return (
        <>
            <Head>
                <title>User List</title>
            </Head>
            <AdminLayout breadCrumbs={breadCrumbs}>
                <UserList data={data.jobs} columns={columns} actions={actions} />
            </AdminLayout>
        </>
    );
};

export default UsersList;
