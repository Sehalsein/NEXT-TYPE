import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Form } from 'antd';

import ButtonComponent from '@components/FormComponents/ButtonComponent';
import SectionGenerator from '@components/FormBuilder/SectionGenerator';
import FormGenerator from '@components/FormBuilder/FormGenerator';

const FormBuilder = (props): JSX.Element => {
    const { handleInput, formData, sections, fields, onSubmit, primaryButton, secondaryButton } = props;

    let layout = <p>Loading</p>;
    if (sections) {
        layout = <SectionGenerator sections={sections} handleInput={handleInput} formData={formData} />;
    } else {
        layout = <FormGenerator fields={fields} handleInput={handleInput} formData={formData} />;
    }
    return (
        <Form
            layout="vertical"
            onSubmit={(e): void => {
                e.preventDefault();
                onSubmit();
            }}
        >
            <Row>{layout}</Row>
            <Row type="flex" gutter={[8, 8]}>
                <Col>
                    <ButtonComponent
                        title={primaryButton.title}
                        status={primaryButton.status}
                        type="submit"
                        size={primaryButton.size}
                    />
                </Col>
                <Col>
                    {secondaryButton ? (
                        <ButtonComponent
                            title={secondaryButton.title}
                            onClick={secondaryButton.onClick}
                            status={secondaryButton.status}
                            type={secondaryButton.type}
                            size={secondaryButton.size}
                        />
                    ) : null}
                </Col>
            </Row>
        </Form>
    );
};

FormBuilder.defaultProps = {
    sections: null,
    fields: null,
    secondaryButton: null,
};

FormBuilder.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    handleInput: PropTypes.func.isRequired,
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
        onClick: PropTypes.func,
        title: PropTypes.string.isRequired,
        type: PropTypes.string,
        size: PropTypes.string,
        status: PropTypes.string,
    }).isRequired,
    secondaryButton: PropTypes.shape({
        onClick: PropTypes.func,
        title: PropTypes.string.isRequired,
        type: PropTypes.string,
        size: PropTypes.string,
        status: PropTypes.string,
    }),
    formData: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default FormBuilder;
