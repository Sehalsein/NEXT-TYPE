/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import App from 'next/app';
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

type Props = {
    apollo: any;
};
class MyApp extends App<Props, {}> {
    render(): JSX.Element {
        const { Component, pageProps, apollo } = this.props;
        return (
            <ApolloProvider client={apollo}>
                <ReactBreakpoints breakpoints={breakpoints}>
                    <Component {...pageProps} />
                </ReactBreakpoints>
            </ApolloProvider>
        );
    }
}

// Wraps all components in the tree with the data provider
export default ApolloClient(MyApp);
