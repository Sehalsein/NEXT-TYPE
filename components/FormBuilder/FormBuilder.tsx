import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SelectComponent from '@components/InputComponents/SelectComponent';
import InputComponent from '@components/InputComponents/InputComponent';
import ButtonComponent from '@components/InputComponents/ButtonComponent';

const FormBuilder = (props) => {
  const {
    onSubmit,
    onSecondaryButton,
    handleInput,
    formConfig,
    formData,
  } = props;
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <Row>
        {formConfig.fields.map((form) => (
          <Col
            xs={form.responsive ? form.responsive.xs : 12}
            sm={form.responsive ? form.responsive.sm : 12}
            md={form.responsive ? form.responsive.md : 6}
            lg={form.responsive ? form.responsive.lg : 4}
            xl={form.responsive ? form.responsive.xl : 4}
            key={form.name}
          >
            {form.inputType === 'select' ? (
              <SelectComponent
                label={form.label}
                isRequired={form.isRequired}
                isReadOnly={form.isReadOnly}
                isDisabled={form.isDisabled}
                name={form.name}
                value={formData[form.name]}
                handleChange={handleInput}
                placeholder={form.placeholder}
                options={form.options}
                optionKey={form.optionKey}
                valueKey={form.valueKey}
                validation={form.validation}
              />
            ) : (
              <InputComponent
                label={form.label}
                isRequired={form.isRequired}
                isReadOnly={form.isReadOnly}
                isDisabled={form.isDisabled}
                name={form.name}
                type={form.type}
                value={formData[form.name]}
                handleChange={handleInput}
                placeholder={form.placeholder}
                title={form.title}
                validation={form.validation}
              />
            )}
          </Col>
        ))}
      </Row>
      <Row>
        <Col md={12} lg={5}>
          <ButtonComponent
            title={formConfig.primaryButton.title}
            className="btn-danger"
          />

          <ButtonComponent
            title={formConfig.secondaryButton.title}
            className="btn-light  m-l-50"
            onClick={onSecondaryButton}
          />
        </Col>
      </Row>
    </form>
  );
};

FormBuilder.defaultProps = {
  onSecondaryButton: () => {},
};

FormBuilder.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handleInput: PropTypes.func.isRequired,
  onSecondaryButton: PropTypes.func,
  formConfig: PropTypes.exact({
    fields: PropTypes.arrayOf(
      PropTypes.shape({
        inputType: PropTypes.string,
        label: PropTypes.string,
        isRequired: PropTypes.bool,
        isReadOnly: PropTypes.bool,
        isDisabled: PropTypes.bool,
        name: PropTypes.string.isRequired,
        type: PropTypes.string,
        placeholder: PropTypes.string,
        title: PropTypes.string,
        validation: PropTypes.string,
        responsive: PropTypes.object,
        options: PropTypes.arrayOf(PropTypes.any),
        optionKey: PropTypes.string,
        valueKey: PropTypes.string,
      }),
    ).isRequired,
    primaryButton: PropTypes.shape({
      title: PropTypes.string,
    }).isRequired,
    secondaryButton: PropTypes.shape({
      title: PropTypes.string,
    }),
  }).isRequired,
  formData: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default FormBuilder;
