import React from 'react';
import PropTypes from 'prop-types';
import { Select, Form } from 'antd';

const { Option } = Select;

const SelectComponent = (props): JSX.Element => {
    const {
        label,
        name,
        placeholder,
        size,

        isDisabled,
        isClearable,
        handleChange,

        mode,
        isSearchable,
        optionKey,
        valueKey,
        options,
    } = props;
    return (
        <Form.Item label={label}>
            <Select
                showSearch={isSearchable}
                mode={mode}
                id={name}
                placeholder={placeholder}
                size={size}
                disabled={isDisabled}
                onChange={(e): void => {
                    handleChange(name, e);
                }}
                allowClear={isClearable}
            >
                {options.length && typeof options[0] === 'object'
                    ? options.map(option => (
                          <Option key={option[valueKey]} value={option[valueKey]}>
                              {option[optionKey]}
                          </Option>
                      ))
                    : options.map(option => (
                          <Option key={option} value={option}>
                              {option}
                          </Option>
                      ))}
            </Select>
        </Form.Item>
    );
};

SelectComponent.defaultProps = {
    label: 'Select value',
    placeholder: 'Select value',
    size: 'default',
    isDisabled: false,
    isClearable: true,

    mode: 'default',
    isSearchable: true,
    optionKey: 'Id',
    valueKey: 'description',
};

SelectComponent.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    size: PropTypes.string,
    isDisabled: PropTypes.bool,
    isClearable: PropTypes.bool,
    handleChange: PropTypes.func.isRequired,

    mode: PropTypes.string,
    isSearchable: PropTypes.bool,
    optionKey: PropTypes.string,
    valueKey: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default SelectComponent;
