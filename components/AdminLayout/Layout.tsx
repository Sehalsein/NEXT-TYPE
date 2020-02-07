import React from 'react';
import PropTypes from 'prop-types';

const AdminLayout = (props): JSX.Element => {
    const { children } = props;
    return <div className="main-section">{children}</div>;
};

AdminLayout.propTypes = {
    children: PropTypes.element.isRequired,
};

export default AdminLayout;
