import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ButtonComponent from '@components/InputComponents/ButtonComponent';
import SectionGenerator from '@components/FormBuilder/SectionGenerator';
import FormBuilder from '@components/FormBuilder/FormBuilder';

const FormGenerator = (props): JSX.Element => {
    const { onSubmit, onSecondaryButton, handleInput, formConfig, formData, validator, className } = props;

    let layout = <p>Loading</p>;
    if (formConfig.sections) {
        layout = (
            <SectionGenerator
                sections={formConfig.sections}
                handleInput={handleInput}
                formData={formData}
                validator={validator}
                className={className}
            />
        );
    } else {
        layout = (
            <FormBuilder
                fields={formConfig.fields}
                handleInput={handleInput}
                formData={formData}
                validator={validator}
            />
        );
    }
    return (
        <form
            onSubmit={(e): void => {
                e.preventDefault();
                if (validator.allValid()) {
                    onSubmit();
                } else {
                    validator.showMessages();
                }
            }}
        >
            <div className={!formConfig.sections ? className : ''}>
                {layout}
                <Row>
                    <Col md="auto">
                        <ButtonComponent title={formConfig.primaryButton.title} className="btn-danger" type="submit" />
                    </Col>
                    <Col md="auto">
                        {formConfig.secondaryButton ? (
                            <ButtonComponent
                                title={formConfig.secondaryButton.title}
                                className="btn-light"
                                type="button"
                                onClick={onSecondaryButton}
                            />
                        ) : null}
                    </Col>
                </Row>
            </div>
        </form>
    );
};

FormGenerator.defaultProps = {
    className: 'box-card',
    onSecondaryButton: (): void => {},
    validator: null,
};

FormGenerator.propTypes = {
    className: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
    handleInput: PropTypes.func.isRequired,
    onSecondaryButton: PropTypes.func,
    validator: PropTypes.objectOf(PropTypes.any),
    formConfig: PropTypes.exact({
        sections: PropTypes.arrayOf(
            PropTypes.shape({
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
                responsive: PropTypes.object,
            }),
        ),
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
        ),
        primaryButton: PropTypes.shape({
            title: PropTypes.string.isRequired,
        }).isRequired,
        secondaryButton: PropTypes.shape({
            title: PropTypes.string,
        }),
    }).isRequired,
    formData: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default FormGenerator;
