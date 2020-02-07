import React from 'react';
import PropTypes from 'prop-types';

// TODO: Fix Button Type
const ButtonComponent = (props): JSX.Element => {
    const { className, onClick, title, type } = props;
    return <input type={type} className={`btn ${className}`} onClick={onClick} value={title} />;
};

ButtonComponent.defaultProps = {
    className: '',
    type: 'button',
    onClick: (): void => {},
};

ButtonComponent.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    title: PropTypes.string.isRequired,
    type: PropTypes.string,
};

export default ButtonComponent;
