import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';

import FormBuilder from '@components/FormBuilder/FormBuilder';

const SectionGenerator = (props): JSX.Element => {
    const { sections, handleInput, formData, className } = props;

    return sections.map((section, index) => (
        <Col
            xs={section.responsive ? section.responsive.xs : 12}
            sm={section.responsive ? section.responsive.sm : 12}
            md={section.responsive ? section.responsive.md : 12}
            lg={section.responsive ? section.responsive.lg : 12}
            xl={section.responsive ? section.responsive.xl : 12}
            key={index}
        >
            <div className={className}>
                <FormBuilder fields={section.fields} handleInput={handleInput} formData={formData} />
            </div>
        </Col>
    ));
};

SectionGenerator.defaultProps = {
    validator: null,
    className: 'box-card',
};

SectionGenerator.propTypes = {
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
    ).isRequired,
    formData: PropTypes.objectOf(PropTypes.any).isRequired,
    className: PropTypes.string,
};

export default SectionGenerator;
