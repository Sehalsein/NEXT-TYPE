/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const TableBuilder = (props): JSX.Element => {
    const { data, tableConfig } = props;

    return (
        <div className="table-responsive">
            <table className="table align-items-center table-flush">
                <thead className="thead-light">
                    {tableConfig.map(config => {
                        const col = Object.values(config);
                        return (
                            <tr key={Math.random()}>
                                {col.map((val: any) => (
                                    <th
                                        className={`${val.className} ${val.type === 'number' ? 'text-right' : ''}`}
                                        key={val.title}
                                    >
                                        {val.title}
                                    </th>
                                ))}
                            </tr>
                        );
                    })}
                </thead>
                <tbody>
                    {data.map(tableData => {
                        const col = Object.keys(tableConfig[0]);
                        const configs = tableConfig[0];
                        return (
                            <tr key={Math.random()}>
                                {col.map(val => {
                                    if (configs[val]) {
                                        if (val === 'actions') {
                                            return (
                                                <td key={Math.random()}>
                                                    {configs[val].items.map(item => {
                                                        if (item.redirectTo) {
                                                            const redirect = item.redirectTo;
                                                            const href = {
                                                                pathname: redirect.url,
                                                                query: {},
                                                            };

                                                            if (redirect.params) {
                                                                const queries = {};
                                                                redirect.params.forEach(param => {
                                                                    if (typeof param === 'object') {
                                                                        queries[param.as] = tableData[param.id];
                                                                    } else {
                                                                        queries[param] = tableData[param];
                                                                    }
                                                                });

                                                                href.query = queries;
                                                            }
                                                            return (
                                                                <Link href={href} key={Math.random()}>
                                                                    <a>{item.title}</a>
                                                                </Link>
                                                            );
                                                        }

                                                        if (item.onClick) {
                                                            return (
                                                                <a
                                                                    onClick={item.onClick}
                                                                    onKeyDown={item.onClick}
                                                                    role="button"
                                                                    tabIndex={0}
                                                                    key={Math.random()}
                                                                >
                                                                    {item.title}
                                                                </a>
                                                            );
                                                        }

                                                        return <a>{item.title}</a>;
                                                    })}
                                                </td>
                                            );
                                        }

                                        let cellValue = tableData[val];
                                        if (configs[val].valuePrepareFunction) {
                                            cellValue = configs[val].valuePrepareFunction(tableData[val], tableData);
                                        }

                                        if (typeof cellValue === 'object') {
                                            cellValue = '';
                                        }

                                        return (
                                            <td
                                                className={`${configs[val].className} ${
                                                    configs[val].type === 'number' ? 'text-right' : ''
                                                }`}
                                                key={Math.random()}
                                            >
                                                {cellValue}
                                            </td>
                                        );
                                    }
                                    return null;
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

TableBuilder.defaultProps = {};

TableBuilder.propTypes = {
    data: PropTypes.arrayOf(PropTypes.any).isRequired,
    tableConfig: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default TableBuilder;
