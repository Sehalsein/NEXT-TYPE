import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SelectComponent from '@components/InputComponents/SelectComponent';
import InputComponent from '@components/InputComponents/InputComponent';
import DatePickerComponent from '@components/InputComponents/DatePickerComponent';

const FormBuilder = (props): JSX.Element => {
    const { handleInput, fields, formData, validator } = props;
    return (
        <Row>
            {fields.map(form => {
                let formInputComponent = <h5>Input</h5>;

                if (form.type === 'select') {
                    formInputComponent = (
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
                            title={form.title}
                            validator={validator}
                            validation={form.validation}
                        />
                    );
                } else if (form.type === 'date') {
                    formInputComponent = (
                        <DatePickerComponent
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
                            validator={validator}
                            validation={form.validation}
                        />
                    );
                } else {
                    formInputComponent = (
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
                            validator={validator}
                            validation={form.validation}
                        />
                    );
                }

                return (
                    <Col
                        xs={form.responsive ? form.responsive.xs : 12}
                        sm={form.responsive ? form.responsive.sm : 12}
                        md={form.responsive ? form.responsive.md : 6}
                        lg={form.responsive ? form.responsive.lg : 4}
                        xl={form.responsive ? form.responsive.xl : 4}
                        key={form.name}
                    >
                        {formInputComponent}
                    </Col>
                );
            })}
        </Row>
    );
};

FormBuilder.defaultProps = {
    validator: null,
};

FormBuilder.propTypes = {
    handleInput: PropTypes.func.isRequired,
    validator: PropTypes.objectOf(PropTypes.any),
    fields: PropTypes.arrayOf(
        PropTypes.shape({
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
    formData: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default FormBuilder;
