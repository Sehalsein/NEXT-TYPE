import React from 'react';
import Head from 'next/head';

import AdminLayout from '@components/AdminLayout/Layout';
import UserAdd from '@src/Users/User-Add';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@public/css/styles.css';

const Home = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <AdminLayout>
      <UserAdd />
    </AdminLayout>
  </>
);

export default Home;
