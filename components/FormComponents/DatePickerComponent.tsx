import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker, Form } from 'antd';

const DatePickerComponent = (props): JSX.Element => {
    const {
        label,
        name,
        placeholder,
        value,
        size,
        isDisabled,
        isClearable,
        handleChange,

        isTimeSelectable,
    } = props;
    return (
        <Form.Item label={label}>
            <DatePicker
                style={{ width: '100%', height: '100%' }}
                id={name}
                name={name}
                placeholder={placeholder}
                value={value}
                size={size}
                showTime={isTimeSelectable}
                disabled={isDisabled}
                onChange={(date): void => {
                    handleChange(name, date);
                }}
                allowClear={isClearable}
            />
            {/* {isRequired && validator && validation
                ? validator.message(title === 'value' ? name : title, value, validation)
                : null} */}
        </Form.Item>
    );
};

DatePickerComponent.defaultProps = {
    label: 'Select date',
    placeholder: 'Select date',
    size: 'default',
    isDisabled: false,
    isClearable: true,
    isTimeSelectable: false,
};

DatePickerComponent.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    size: PropTypes.string,
    isDisabled: PropTypes.bool,
    isClearable: PropTypes.bool,
    isTimeSelectable: PropTypes.bool,

    handleChange: PropTypes.func.isRequired,
};

export default DatePickerComponent;
