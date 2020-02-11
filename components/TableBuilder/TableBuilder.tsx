/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import TableAction from '@components/TableBuilder/TableAction';

const TableBuilder = (props): JSX.Element => {
    const { data, columns, rowKey, actions, isLoading, hasPagination, size } = props;

    if (actions) {
        columns.push({
            title: 'Actions',
            key: 'action',
            render: (text, record) => <TableAction record={record} actions={actions} />,
        });
    }
    return (
        <div className="table-style-1">
            <Table
                loading={isLoading}
                columns={columns}
                dataSource={data}
                rowKey={rowKey}
                pagination={hasPagination}
                size={size}
                scroll={{ x: true }}
            />
        </div>
    );
};

TableBuilder.defaultProps = {
    rowKey: 'id',
    actions: null,
    isLoading: false,
    hasPagination: false,
    size: 'default',
};

TableBuilder.propTypes = {
    isLoading: PropTypes.bool,
    hasPagination: PropTypes.bool,
    size: PropTypes.string,
    rowKey: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.any).isRequired,
    columns: PropTypes.arrayOf(PropTypes.any).isRequired,
    actions: PropTypes.arrayOf(PropTypes.any),
};

export default TableBuilder;
