import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Layout, Menu, Icon, Typography } from 'antd';
import AppLogo from '@components/Icons/AppLogo';

const { Sider } = Layout;
const { Title } = Typography;

const SideBar = (props): JSX.Element => {
    const { isCollapsed, menuItems, width } = props;
    return (
        <Sider theme="dark" trigger={null} collapsible collapsed={isCollapsed} width={width}>
            <div className="logo">
                <AppLogo />
                <Title>Redintegro</Title>
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['0']}>
                {menuItems.map((menuItem, index) => {
                    const { title, icon, link } = menuItem;
                    return (
                        <Menu.Item key={index.toString()}>
                            <Link href={link}>
                                <div>
                                    <Icon type={icon} />
                                    <span>{title}</span>
                                </div>
                            </Link>
                        </Menu.Item>
                    );
                })}
                {/* <Menu.Item key="1">
                    <Icon type="user" />
                    <span>User Management</span>
                </Menu.Item>
                <Menu.Item key="2">
                    <Icon type="file-add" />
                    <span>Document Upload</span>
                </Menu.Item>
                <Menu.Item key="3">
                    <Icon type="file-done" />
                    <span>Doc Review</span>
                </Menu.Item> */}
            </Menu>
        </Sider>
    );
};

SideBar.defaultProps = {
    width: 200,
};
SideBar.propTypes = {
    isCollapsed: PropTypes.bool.isRequired,
    menuItems: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            icon: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
        }),
    ).isRequired,
    width: PropTypes.number,
};

export default SideBar;
