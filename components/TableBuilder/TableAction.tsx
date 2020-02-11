/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Icon, Divider } from 'antd';

const TableAction = (props): JSX.Element => {
    const { actions, record } = props;

    return actions.map(
        (action): JSX.Element => {
            let currentAction = <span>{action.title}</span>;

            if (action.icon) {
                currentAction = <Icon type={action.icon} />;
            }

            if (action.component) {
                currentAction = action.component;
            }
            if (action.redirectTo) {
                const redirect = action.redirectTo;
                const href = {
                    pathname: redirect.url,
                    query: {},
                };

                if (redirect.params) {
                    const queries = {};
                    redirect.params.forEach(param => {
                        if (typeof param === 'object') {
                            queries[param.as] = record[param.id];
                        } else {
                            queries[param] = record[param];
                        }
                    });

                    href.query = queries;
                }
                return (
                    <>
                        <Link href={href} key={Math.random()}>
                            <a>{currentAction}</a>
                        </Link>
                        <Divider type="vertical" />
                    </>
                );
            }

            if (action.onClick) {
                return (
                    <>
                        <a
                            onClick={action.onClick}
                            onKeyDown={action.onClick}
                            role="button"
                            tabIndex={0}
                            key={Math.random()}
                        >
                            {currentAction}
                        </a>
                        <Divider type="vertical" />
                    </>
                );
            }

            return (
                <>
                    {currentAction}
                    <Divider type="vertical" />
                </>
            );
        },
    );
};

TableAction.propTypes = {
    record: PropTypes.objectOf(PropTypes.any).isRequired,
    actions: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default TableAction;
