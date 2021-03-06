import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';

import SelectComponent from '@components/FormComponents/SelectComponent';
import InputComponent from '@components/FormComponents/InputComponent';
import DatePickerComponent from '@components/FormComponents/DatePickerComponent';
import DateRangeComponent from '@components/FormComponents/DateRangeComponent';
import RadioComponent from '@components/FormComponents/RadioComponent';
import NumberComponent from '@components/FormComponents/NumberComponent';

const FormGenerator = (props): JSX.Element => {
    const { handleInput, fields, formData } = props;
    return (
        <Row gutter={[8, 0]}>
            {fields.map(form => {
                let formInputComponent = <h5>Input</h5>;
                if (form.type === 'select') {
                    formInputComponent = (
                        <SelectComponent
                            label={form.label}
                            name={form.name}
                            placeholder={form.placeholder}
                            size={form.size}
                            isDisabled={form.isDisabled}
                            isClearable={form.isClearable}
                            handleChange={handleInput}
                            mode={form.mode}
                            isSearchable={form.isSearchable}
                            options={form.options}
                            optionKey={form.optionKey}
                            valueKey={form.valueKey}
                        />
                    );
                } else if (form.type === 'date') {
                    formInputComponent = (
                        <DatePickerComponent
                            label={form.label}
                            name={form.name}
                            placeholder={form.placeholder}
                            value={formData[form.name]}
                            size={form.size}
                            isDisabled={form.isDisabled}
                            isClearable={form.isClearable}
                            handleChange={handleInput}
                            isTimeSelectable={form.isTimeSelectable}
                        />
                    );
                } else if (form.type === 'date-range') {
                    formInputComponent = (
                        <DateRangeComponent
                            label={form.label}
                            name={form.name}
                            placeholder={form.placeholder}
                            value={formData[form.name]}
                            size={form.size}
                            isDisabled={form.isDisabled}
                            isClearable={form.isClearable}
                            handleChange={handleInput}
                            isTimeSelectable={form.isTimeSelectable}
                        />
                    );
                } else if (form.type === 'radio') {
                    formInputComponent = (
                        <RadioComponent
                            label={form.label}
                            name={form.name}
                            value={formData[form.name]}
                            size={form.size}
                            isDisabled={form.isDisabled}
                            handleChange={handleInput}
                            options={form.options}
                        />
                    );
                } else if (form.type === 'number') {
                    formInputComponent = (
                        <NumberComponent
                            name={form.name}
                            value={formData[form.name]}
                            label={form.label}
                            placeholder={form.placeholder}
                            size={form.size}
                            max={form.max}
                            min={form.min}
                            precision={form.precision}
                            isDisabled={form.isDisabled}
                            handleChange={handleInput}
                            formatter={form.formatter}
                        />
                    );
                } else {
                    formInputComponent = (
                        <InputComponent
                            label={form.label}
                            name={form.name}
                            type={form.type}
                            placeholder={form.placeholder}
                            value={formData[form.name]}
                            size={form.size}
                            maxLength={formData.maxLength}
                            isDisabled={form.isDisabled}
                            isClearable={form.isClearable}
                            handleChange={handleInput}
                        />
                    );
                }
                return (
                    <Col
                        key={form.name}
                        xs={form.responsive ? form.responsive.xs : 24}
                        sm={form.responsive ? form.responsive.sm : 24}
                        md={form.responsive ? form.responsive.md : 24}
                        lg={form.responsive ? form.responsive.lg : 24}
                        xl={form.responsive ? form.responsive.xl : 24}
                    >
                        {formInputComponent}
                    </Col>
                );
            })}
        </Row>
    );
};

FormGenerator.defaultProps = {};

FormGenerator.propTypes = {
    handleInput: PropTypes.func.isRequired,
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

export default FormGenerator;
