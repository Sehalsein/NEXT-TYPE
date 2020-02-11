import React from 'react';
import PropTypes from 'prop-types';
import { Input, Form } from 'antd';

const InputComponent = (props): JSX.Element => {
    const { name, value, label, placeholder, type, size, maxLength, isDisabled, isClearable, handleChange } = props;
    return (
        <Form.Item label={label}>
            <Input
                id={name}
                name={name}
                value={value}
                placeholder={placeholder}
                type={type}
                size={size}
                maxLength={maxLength}
                disabled={isDisabled}
                allowClear={isClearable}
                onChange={(e): void => {
                    handleChange(e.target.name, e.target.value);
                }}
            />
        </Form.Item>
    );
};

InputComponent.defaultProps = {
    label: 'Enter value',
    placeholder: 'Enter value',
    type: 'text',
    size: 'default',
    maxLength: 100,
    isDisabled: false,
    isClearable: true,
};

InputComponent.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    size: PropTypes.string,
    maxLength: PropTypes.number,
    isDisabled: PropTypes.bool,
    isClearable: PropTypes.bool,
    handleChange: PropTypes.func.isRequired,
};

export default InputComponent;
