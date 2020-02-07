/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import AdminLayout from '@components/AdminLayout/Layout';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import '@public/css/styles.css';

const Home = (): JSX.Element => {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <AdminLayout>
                <>
                    <Link href="/user-add">
                        <a>User Add</a>
                    </Link>
                    <Link href="/user-list">
                        <a>User List</a>
                    </Link>
                    <Link href="/user-detail">
                        <a>User Detail</a>
                    </Link>
                </>
            </AdminLayout>
        </>
    );
};

export default Home;
