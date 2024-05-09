import React, { FunctionComponent, ReactNode } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Layout from 'src/stories/Components/Layout/Layout';

const Main: FunctionComponent = () => {
  return (
    <Layout>
      <h1>
        <Link to='/'>Reduxstagram</Link>
      </h1>
      <Outlet />
    </Layout>
  );
};

export default Main;
