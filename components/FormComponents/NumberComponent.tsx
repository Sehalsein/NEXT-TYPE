import React from 'react';
import PropTypes from 'prop-types';
import { InputNumber, Form } from 'antd';

const NumberComponent = (props): JSX.Element => {
    const { name, value, label, placeholder, size, formatter, max, min, precision, isDisabled, handleChange } = props;
    return (
        <Form.Item label={label}>
            <InputNumber
                style={{ width: '100%' }}
                id={name}
                name={name}
                value={value}
                placeholder={placeholder}
                size={size}
                formatter={formatter}
                max={max}
                min={min}
                precision={precision}
                disabled={isDisabled}
                onChange={(e: number): void => {
                    handleChange(name, e);
                }}
            />
        </Form.Item>
    );
};

NumberComponent.defaultProps = {
    label: 'Enter number',
    placeholder: 'Enter number',
    size: 'default',
    max: Infinity,
    min: -Infinity,
    precision: 0,
    isDisabled: false,
    formatter: (value: number): string => value.toString(),
};

NumberComponent.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    size: PropTypes.string,
    max: PropTypes.number,
    min: PropTypes.number,
    precision: PropTypes.number,
    isDisabled: PropTypes.bool,
    handleChange: PropTypes.func.isRequired,
    formatter: PropTypes.func,
};

export default NumberComponent;
