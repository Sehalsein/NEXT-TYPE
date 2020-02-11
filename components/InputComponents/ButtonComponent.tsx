import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';

// TODO: Fix Button Type
const ButtonComponent = (props): JSX.Element => {
    const { title, type, size, status, icon, onClick } = props;
    return (
        <Button htmlType={type} type={status} size={size} icon={icon} onClick={onClick}>
            {title}
        </Button>
    );
};

ButtonComponent.defaultProps = {
    type: 'button',
    size: 'default',
    status: 'default',
    icon: '',

    onClick: (): void => {},
};

ButtonComponent.propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.string,
    size: PropTypes.string,
    status: PropTypes.string,
    icon: PropTypes.string,

    isDisabled: PropTypes.bool,

    onClick: PropTypes.func,
};

export default ButtonComponent;
