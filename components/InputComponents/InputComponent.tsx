import React from 'react';
import PropTypes from 'prop-types';

const InputComponent = (props) => {
  const {
    label,
    isRequired,
    isReadOnly,
    isDisabled,
    name,
    type,
    value,
    handleChange,
    placeholder,
    title,
    validation,
  } = props;
  return (
    <>
      <div className="form-group">
        <label htmlFor={name}>
          {label}
          {isRequired ? <span style={{ color: 'red' }}>*</span> : null}
        </label>

        <input
          className={`${
            isReadOnly ? 'form-control-plaintext' : 'form-control'
          }`}
          id={name}
          readOnly={isReadOnly}
          name={name}
          type={type}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={isDisabled}
        />
        {/* {props.validator && validation
          ? props.validator.message(title, value, validation)
          : null} */}
      </div>
    </>
  );
};

InputComponent.defaultProps = {
  label: '',
  isRequired: false,
  isReadOnly: false,
  isDisabled: false,
  type: 'text',
  placeholder: 'Enter value',
  title: 'value',
  validation: '',
};

InputComponent.propTypes = {
  label: PropTypes.string,
  isRequired: PropTypes.bool,
  isReadOnly: PropTypes.bool,
  isDisabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  handleChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  title: PropTypes.string,
  validation: PropTypes.string,
};

export default InputComponent;
