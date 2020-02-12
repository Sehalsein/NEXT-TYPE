import React from 'react';
import PropTypes from 'prop-types';
import { Radio, Form } from 'antd';

const RadioComponent = (props): JSX.Element => {
    const {
        label,
        name,
        value,
        size,
        isDisabled,
        handleChange,

        optionKey,
        valueKey,
        options,
    } = props;
    return (
        <Form.Item label={label}>
            <Radio.Group
                id={name}
                name={name}
                value={value}
                size={size}
                disabled={isDisabled}
                onChange={(e): void => {
                    handleChange(e.target.name, e.target.value);
                }}
            >
                {options.length && typeof options[0] === 'object'
                    ? options.map(option => (
                          <Radio key={option[valueKey]} value={option[valueKey]}>
                              {option[optionKey]}
                          </Radio>
                      ))
                    : options.map(option => (
                          <Radio key={option} value={option}>
                              {option}
                          </Radio>
                      ))}
            </Radio.Group>
        </Form.Item>
    );
};

RadioComponent.defaultProps = {
    label: 'Select value',
    size: 'default',
    isDisabled: false,

    optionKey: 'Id',
    valueKey: 'description',
};

RadioComponent.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    label: PropTypes.string,
    size: PropTypes.string,
    optionKey: PropTypes.string,
    valueKey: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.any).isRequired,
    isDisabled: PropTypes.bool,

    handleChange: PropTypes.func.isRequired,
};

export default RadioComponent;
