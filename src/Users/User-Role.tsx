import React from 'react';
import PropTypes from 'prop-types';

const UserRoles = (props): JSX.Element => {
    const { title, onViewChange } = props;
    return <h1>{title}</h1>;
};

UserRoles.defaultProps = {
    onViewChange: (): void => {},
};

UserRoles.propTypes = {
    title: PropTypes.string.isRequired,
    onViewChange: PropTypes.func,
};

export default UserRoles;
