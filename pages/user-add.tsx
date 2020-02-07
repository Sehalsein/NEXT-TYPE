import React from 'react';
import Head from 'next/head';
import { useQuery } from '@apollo/react-hooks';

import AdminLayout from '@components/AdminLayout/Layout';
import UserAdd from '@src/Users/User-Add';
import JOBS_QUERY from '@services/graphql/queries/test';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import '@public/css/styles.css';

const UsersAdd = (): JSX.Element => {
    const { data, loading, error } = useQuery(JOBS_QUERY);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{`Error: ${JSON.stringify(error)}`}</p>;
    }

    const formConfig = {
        fields: [
            {
                label: 'Name',
                name: 'name',
                title: 'Person Name',
                type: 'text',
                placeholder: 'Enter Name',
                isRequired: true,
                validation: 'required',
            },
            {
                label: 'Employee Id',
                name: 'employeeId',
                title: 'employeeId',
                type: 'text',
                placeholder: 'Enter Employee Id',
                isRequired: true,
                validation: 'required',
            },
            {
                label: 'Email Id for Login',
                name: 'email',
                type: 'text',
                placeholder: 'user@ayanapower.com',
                isRequired: true,
                validation: 'required|email',
            },
            {
                label: 'Designation',
                name: 'designation',
                type: 'select',
                placeholder: 'Select Designation',
                options: data.jobs,
                optionKey: 'title',
                valueKey: 'id',
                isRequired: true,
                validation: 'required',
            },
            {
                label: 'Mobile No',
                name: 'mobileNo',
                type: 'text',
                placeholder: 'Enter Mobile No',
                isRequired: true,
                validation: 'required',
            },
            {
                label: 'Date Of Joining',
                name: 'dateOfJoining',
                type: 'date',
                placeholder: 'dd/mm/yyyy',
                isRequired: true,
                validation: 'required',
            },
            {
                label: 'Reporting Manager',
                name: 'reportingManager',
                type: 'select',
                placeholder: 'Select Reporting Manager',
                options: data.jobs,
                optionKey: 'title',
                valueKey: 'id',
                isRequired: false,
                validation: 'required',
            },
            {
                label: 'Type',
                name: 'type',
                type: 'select',
                placeholder: 'Select Type',
                options: data.jobs,
                optionKey: 'title',
                valueKey: 'id',
                isRequired: true,
                validation: 'required',
            },
            {
                label: 'Department',
                name: 'department',
                type: 'text',
                placeholder: 'Select Department',
                isRequired: true,
                validation: 'required',
            },
        ],
        primaryButton: {
            title: 'Submit',
        },
        secondaryButton: {
            title: 'Reset',
        },
    };

    return (
        <>
            <Head>
                <title>User Add</title>
            </Head>
            <AdminLayout>
                <UserAdd formConfig={formConfig} />
            </AdminLayout>
        </>
    );
};

export default UsersAdd;
