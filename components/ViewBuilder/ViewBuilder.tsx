import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Card, Descriptions } from 'antd';
import ButtonComponent from '@components/InputComponents/ButtonComponent';

const ViewBuilder = (props): JSX.Element => {
    const { fields, viewData, layout, column, hasBorder, size, hasColon, secondaryButton, primaryButton } = props;
    return (
        <Card>
            <Descriptions layout={layout} column={column} bordered={hasBorder} size={size} colon={hasColon}>
                {fields.map(form => {
                    const { label, name, span } = form;

                    return (
                        <Descriptions.Item label={label} span={span}>
                            {viewData[name]}
                        </Descriptions.Item>
                    );
                })}
            </Descriptions>
            <Row type="flex" gutter={[8, 8]}>
                <Col>
                    {primaryButton ? (
                        <ButtonComponent
                            title={primaryButton.title}
                            status="primary"
                            type="submit"
                            size={primaryButton.size}
                            onClick={primaryButton.onClick}
                        />
                    ) : null}
                </Col>
                <Col>
                    {secondaryButton ? (
                        <ButtonComponent
                            title={secondaryButton.title}
                            status={secondaryButton.status}
                            type={secondaryButton.type}
                            size={secondaryButton.size}
                            onClick={secondaryButton.onClick}
                        />
                    ) : null}
                </Col>
            </Row>
        </Card>
    );
};

ViewBuilder.defaultProps = {
    column: 6,
    layout: 'vertical',
    size: 'default',
    hasColon: false,
    hasBorder: false,
    primaryButton: null,
    secondaryButton: null,
};
ViewBuilder.propTypes = {
    fields: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            name: PropTypes.string.isRequired,
            span: PropTypes.number,
        }),
    ).isRequired,
    viewData: PropTypes.objectOf(PropTypes.any).isRequired,
    primaryButton: PropTypes.shape({
        title: PropTypes.string.isRequired,
        type: PropTypes.string,
        size: PropTypes.string,
        status: PropTypes.string,
        onClick: PropTypes.func,
    }),
    secondaryButton: PropTypes.shape({
        title: PropTypes.string,
        type: PropTypes.string,
        size: PropTypes.string,
        status: PropTypes.string,
        onClick: PropTypes.func,
    }),
    column: PropTypes.shape({
        xxl: PropTypes.number,
        xl: PropTypes.number,
        lg: PropTypes.number,
        md: PropTypes.number,
        sm: PropTypes.number,
        xs: PropTypes.number,
    }),
    layout: PropTypes.string,
    size: PropTypes.string,
    hasBorder: PropTypes.bool,
    hasColon: PropTypes.bool,
};
export default ViewBuilder;
