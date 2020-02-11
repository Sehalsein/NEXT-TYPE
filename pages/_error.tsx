import React from 'react';
import PropTypes from 'prop-types';
import { Result, Button } from 'antd';

const Error = (props): JSX.Element => {
    const { statusCode } = props;

    let errorScreen = (
        <Result
            status="500"
            title="500"
            subTitle="Sorry, the server is wrong."
            extra={<Button type="primary">Back Home</Button>}
        />
    );

    if (statusCode === 404) {
        errorScreen = (
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button type="primary">Back Home</Button>}
            />
        );
    }

    if (statusCode === 403) {
        errorScreen = (
            <Result
                status="403"
                title="403"
                subTitle="Sorry, you are not authorized to access this page."
                extra={<Button type="primary">Back Home</Button>}
            />
        );
    }

    if (statusCode === 500) {
        errorScreen = (
            <Result
                status="500"
                title="500"
                subTitle="Sorry, the server is wrong."
                extra={<Button type="primary">Back Home</Button>}
            />
        );
    }

    return errorScreen;
};

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
};

Error.propTypes = {
    statusCode: PropTypes.number.isRequired,
};
export default Error;
