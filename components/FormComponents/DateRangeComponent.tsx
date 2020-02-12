import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker, Form } from 'antd';

const { RangePicker } = DatePicker;

const DateRangeComponent = (props): JSX.Element => {
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
            <RangePicker
                style={{ width: '100%' }}
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
        </Form.Item>
    );
};

DateRangeComponent.defaultProps = {
    label: 'Enter value',
    placeholder: 'Enter value',
    size: 'default',
    isDisabled: false,
    isClearable: true,

    isTimeSelectable: false,
};

DateRangeComponent.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    size: PropTypes.string,
    isDisabled: PropTypes.bool,
    isClearable: PropTypes.bool,
    handleChange: PropTypes.func.isRequired,

    isTimeSelectable: PropTypes.bool,
};

export default DateRangeComponent;
