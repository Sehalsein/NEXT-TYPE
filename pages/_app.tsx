/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { ApolloProvider } from '@apollo/react-hooks';
import ReactBreakpoints from 'react-breakpoints';

import '@public/css/styles.less';

import ApolloClient from '@services/graphql/apollo-client';

const breakpoints = {
    mobile: 320,
    mobileLandscape: 480,
    tablet: 768,
    tabletLandscape: 1024,
    desktop: 1200,
    desktopLarge: 1500,
    desktopWide: 1920,
};

const MyApp = (props): JSX.Element => {
    const { Component, pageProps, apollo } = props;
    return (
        <ApolloProvider client={apollo}>
            <ReactBreakpoints breakpoints={breakpoints}>
                <Component {...pageProps} />
            </ReactBreakpoints>
        </ApolloProvider>
    );
};

MyApp.propTypes = {
    Component: PropTypes.element.isRequired,
    pageProps: PropTypes.objectOf(PropTypes.any).isRequired,
    apollo: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ApolloClient(MyApp);
