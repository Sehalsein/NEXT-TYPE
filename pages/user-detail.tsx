import React from 'react';
import Head from 'next/head';
import { useQuery } from '@apollo/react-hooks';

import AdminLayout from '@components/AdminLayout/AdminLayout';
import TabBuilder from '@components/TabBuilder/TabBuilder';
import CountriesList from '@src/Users/Countries-List';
import ViewBuilder from '@components/ViewBuilder/ViewBuilder';

import { CITY } from '@services/graphql/queries/test';
import CitiesList from '@src/Users/Cities-List';
import CountriesAdd from '@src/Users/Countires-Add';
import { Row, Col } from 'antd';

const breadCrumbs = [
    { link: '/', title: 'Home' },
    { link: '/user-list', title: 'Ayana Users' },
];

const UsersDetail = (): JSX.Element => {
    const { data, loading, error } = useQuery(CITY);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{`Error: ${JSON.stringify(error)}`}</p>;
    }

    const tabConfig = [
        {
            title: 'Cities',
            components: [<CitiesList title="employee 1" />],
        },
        {
            title: 'Countries',
            components: [<CountriesList title="employee 1" />, <CountriesAdd />],
        },
    ];

    const fields = [
        { label: 'Name', name: 'name', span: 1 },
        { label: 'Type', name: 'type' },
        { label: 'Slug', name: 'slug' },
        { label: 'Created At', name: 'createdAt' },
        { label: 'Updated At', name: 'updatedAt' },
    ];

    const primaryButton = {
        title: 'Edit',
        size: 'large',
    };

    return (
        <>
            <Head>
                <title>User Detail</title>
            </Head>
            <AdminLayout breadCrumbs={breadCrumbs}>
                <Row gutter={[0, 20]}>
                    <Col>
                        <ViewBuilder
                            fields={fields}
                            viewData={data.city}
                            primaryButton={primaryButton}
                            column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
                            layout="vertical"
                            size="small"
                        />
                    </Col>
                    <Col>
                        <TabBuilder tabConfig={tabConfig} />
                    </Col>
                </Row>
            </AdminLayout>
        </>
    );
};

export default UsersDetail;
