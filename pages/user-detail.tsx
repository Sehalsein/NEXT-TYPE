import React from 'react';
import Head from 'next/head';
import AdminLayout from '@components/AdminLayout/Layout';
import TabBuilder from '@components/TabBuilder/TabBuilder';
import UserTab from '@src/Users/User-Tab';

const UsersDetail = (): JSX.Element => {
    const tabConfig = [
        {
            title: 'Roles',
            component: <UserTab title="employee 1" />,
        },
        {
            title: 'Coverage Area',
            isCard: false,
        },
        {
            title: 'Coverage Area 2',
            isCard: false,
        },
        {
            title: 'Employees',
            component: [<UserTab title="employee 1" />, <UserTab title="employee 2" />, <UserTab title="employee 3" />],
        },
    ];
    return (
        <>
            <Head>
                <title>User Detail</title>
            </Head>
            <AdminLayout>
                <TabBuilder tabConfig={tabConfig} />
            </AdminLayout>
        </>
    );
};

export default UsersDetail;
