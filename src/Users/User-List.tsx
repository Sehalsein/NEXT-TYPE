import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Typography, Card } from 'antd';

import TableBuilder from '@components/TableBuilder/TableBuilder';
import ButtonComponent from '@components/InputComponents/ButtonComponent';

const { Title } = Typography;

const UserList = (props): JSX.Element => {
    const { data, columns, rowKey, actions } = props;

    return (
        <>
            <Row>
                <Col md={12}>
                    <Title level={2}>User List</Title>
                </Col>
                {/* <Col md={12}>
                    <ButtonComponent
                        title="Add User"
                        type="primary"
                        size="large"
                        onClick={() => {
                            console.log('ASD');
                        }}
                    />
                    <ButtonComponent title="Filter" size="large" />
                </Col> */}
            </Row>
            <Col>
                <TableBuilder columns={columns} data={data} rowKey={rowKey} actions={actions} size="small" />
            </Col>
        </>
    );
};

UserList.defaultProps = {
    rowKey: 'id',
    actions: null,
};

UserList.propTypes = {
    rowKey: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.any).isRequired,
    columns: PropTypes.arrayOf(PropTypes.any).isRequired,
    actions: PropTypes.arrayOf(PropTypes.any),
};

export default UserList;
