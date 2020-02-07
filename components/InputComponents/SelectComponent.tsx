import React from 'react';
import PropTypes from 'prop-types';

const SelectComponent = (props): JSX.Element => {
    const {
        label,
        isRequired,
        isDisabled,
        isReadOnly,
        name,
        value,
        handleChange,
        placeholder,
        optionKey,
        options,
        valueKey,
        validation,
        validator,
        title,
    } = props;
    return (
        <div className="form-group">
            <label htmlFor={name}>
                {label}
                {isRequired ? <span style={{ color: 'red' }}>*</span> : null}
            </label>

            <select
                name={name}
                value={value}
                onChange={handleChange}
                disabled={isDisabled}
                className={`${isReadOnly ? 'form-control-plaintext' : 'form-control'} `}
            >
                {/* ${isRequired &&
          validator &&
          validator.messageWhenPresent('message') &&
          !validator.fieldValid(title === 'value' ? name : title)
            ? 'is-invalid'
            : ''} */}
                <option value="" disabled>
                    {placeholder}
                </option>
                {options.length && typeof options[0] === 'object'
                    ? options.map(option => (
                          // eslint-disable-next-line react/jsx-indent
                          <option key={option[valueKey]} value={option[valueKey]} label={option[optionKey]}>
                              {option[props.optionKey]}
                          </option>
                          // eslint-disable-next-line indent
                      ))
                    : options.map(option => (
                          // eslint-disable-next-line react/jsx-indent
                          <option key={option} value={option} label={option}>
                              {option}
                          </option>
                          // eslint-disable-next-line indent
                      ))}
            </select>
            {isRequired && validator && validation
                ? validator.message(title === 'value' ? name : title, value, validation)
                : null}
        </div>
    );
};

SelectComponent.defaultProps = {
    label: '',
    isRequired: false,
    isReadOnly: false,
    isDisabled: false,
    placeholder: 'Enter value',
    optionKey: 'description',
    valueKey: 'Id',
    validation: '',
    validator: null,
    title: 'value',
};

SelectComponent.propTypes = {
    label: PropTypes.string,
    isRequired: PropTypes.bool,
    isReadOnly: PropTypes.bool,
    isDisabled: PropTypes.bool,
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    handleChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    optionKey: PropTypes.string,
    valueKey: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.any).isRequired,
    title: PropTypes.string,
    validation: PropTypes.string,
    validator: PropTypes.objectOf(PropTypes.any),
};

export default SelectComponent;
