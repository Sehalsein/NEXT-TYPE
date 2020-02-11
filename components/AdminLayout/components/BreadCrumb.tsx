/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';

import { Breadcrumb } from 'antd';
import Link from 'next/link';

const NavBreadCrumb = (props): JSX.Element => {
    const { breadCrumbs } = props;
    return (
        <Breadcrumb>
            {breadCrumbs.map(crumb => {
                const { title, link } = crumb;
                return (
                    <Breadcrumb.Item key={title}>
                        <Link href={link}>
                            <a>{title}</a>
                        </Link>
                    </Breadcrumb.Item>
                );
            })}
        </Breadcrumb>
    );
};

NavBreadCrumb.propTypes = {
    breadCrumbs: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            icon: PropTypes.string,
            link: PropTypes.string.isRequired,
        }),
    ).isRequired,
};
export default NavBreadCrumb;
