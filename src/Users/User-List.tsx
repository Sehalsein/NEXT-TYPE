import React from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';

import TableBuilder from '@components/TableBuilder/TableBuilder';

const UserList = (props): JSX.Element => {
    const { data, tableConfig } = props;

    return (
        <>
            <h1>User List</h1>
            <Col sm={12}>
                <div className="box-card">
                    <TableBuilder tableConfig={tableConfig} data={data} />
                </div>
            </Col>
        </>
    );
};

UserList.defaultProps = {};

UserList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.any).isRequired,
    tableConfig: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default UserList;
