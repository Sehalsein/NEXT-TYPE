import React from 'react';
import PropTypes from 'prop-types';

const AdminLayout = (props) => {
  const { children } = props;
  return <>{children}</>;
};

AdminLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AdminLayout;
