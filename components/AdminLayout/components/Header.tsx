import React from 'react';
import PropTypes from 'prop-types';

import { Layout, Icon } from 'antd';
import AppLogo from '@components/Icons/AppLogo';

const { Header } = Layout;

const HeaderNav = (props): JSX.Element => {
    const { isCollapsed, toggle, responsive } = props;
    return (
        <Header style={{ background: '#fff', padding: 0 }}>
            {responsive.breakpoints[responsive.currentBreakpoint] > responsive.breakpoints.tablet ? null : (
                <div className="header-logo">
                    <AppLogo />
                </div>
            )}

            <Icon className="trigger" type={isCollapsed ? 'menu-unfold' : 'menu-fold'} onClick={toggle} />
        </Header>
    );
};

HeaderNav.propTypes = {
    isCollapsed: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
    responsive: PropTypes.shape({
        breakpoints: PropTypes.objectOf(PropTypes.any),
        currentBreakpoint: PropTypes.objectOf(PropTypes.any),
    }).isRequired,
};

export default HeaderNav;
