import React from 'react';
import Head from 'next/head';
import { useQuery } from '@apollo/react-hooks';

import AdminLayout from '@components/AdminLayout/AdminLayout';
import UserAdd from '@src/Users/User-Add';
import { JOBS_QUERY } from '@services/graphql/queries/test';

const breadCrumbs = [
    { link: '/', title: 'Home' },
    { link: '/user-add', title: 'User Creation' },
];

const UsersAdd = (): JSX.Element => {
    const { data, loading, error } = useQuery(JOBS_QUERY);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{`Error: ${JSON.stringify(error)}`}</p>;
    }

    const fields = [
        {
            label: 'Last Name',
            name: 'lastName',
            type: 'text',
            placeholder: 'Enter Last Name',
            size: 'large',
            responsive: {
                md: 12,
                lg: 8,
            },
        },
        {
            label: 'Password',
            name: 'password',
            type: 'password',
            placeholder: 'Enter Password',
            size: 'large',
            responsive: {
                md: 12,
                lg: 8,
            },
        },
        {
            label: 'First Name',
            name: 'firstName',
            type: 'text',
            placeholder: 'Enter First Name',
            size: 'large',
            isDisabled: true,
            responsive: {
                md: 12,
                lg: 8,
            },
        },
        {
            label: 'Email',
            name: 'email',
            type: 'email',
            placeholder: 'Enter Email Id',
            size: 'large',
            responsive: {
                md: 12,
                lg: 8,
            },
        },
        {
            label: 'Age',
            name: 'age',
            type: 'number',
            placeholder: 'Enter Age',
            size: 'large',
            responsive: {
                md: 12,
                lg: 8,
            },
        },
        {
            label: 'Designation',
            name: 'designation',
            type: 'select',
            placeholder: 'Select Designation',
            size: 'large',
            options: ['CEO', 'Manager', 'Employee'],
            responsive: {
                md: 12,
                lg: 8,
            },
        },
        {
            label: 'Date of birth',
            name: 'dob',
            type: 'date',
            placeholder: 'Select Date of Birth',
            size: 'large',
            responsive: {
                md: 12,
                lg: 8,
            },
        },
        {
            label: 'Role',
            name: 'role',
            type: 'select',
            placeholder: 'Select Role',
            size: 'large',
            mode: 'multiple',
            options: ['Admin', 'Editor', 'Viewer'],
            responsive: {
                md: 12,
                lg: 8,
            },
        },

        {
            label: 'Gender',
            name: 'gender',
            type: 'radio',
            placeholder: 'Select Radio',
            size: 'large',
            options: ['Male', 'Female'],
            responsive: {
                md: 12,
                lg: 8,
            },
        },
    ];
    const primaryButton = {
        title: 'Submit',
        status: 'primary',
        size: 'large',
    };
    const secondaryButton = {
        title: 'Reset',
        size: 'large',
    };

    return (
        <>
            <Head>
                <title>User Add</title>
            </Head>
            <AdminLayout breadCrumbs={breadCrumbs}>
                <UserAdd
                    fields={fields}
                    primaryButton={primaryButton}
                    secondaryButton={secondaryButton}
                    sections={null}
                />
            </AdminLayout>
        </>
    );
};

export default UsersAdd;
