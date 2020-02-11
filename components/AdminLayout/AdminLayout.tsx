import React from 'react';
import { Layout, Icon, Drawer } from 'antd';
import { withBreakpoints } from 'react-breakpoints';

import MenuItems from '@components/AdminLayout/menu';
import SideBar from '@components/AdminLayout/components/SideBar';
import HeaderNav from '@components/AdminLayout/components/Header';
import NavBreadCrumb from '@components/AdminLayout/components/BreadCrumb';

const { Content } = Layout;

type State = {
    isCollapsed: boolean;
};

// TODO: BreadCrumbs Type
type Props = {
    children: any;
    breadCrumbs: any;
    breakpoints: any;
    currentBreakpoint: any;
};

class AdminLayout extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            isCollapsed: true,
        };
    }

    toggle = (): void => {
        const { isCollapsed } = this.state;
        this.setState({
            isCollapsed: !isCollapsed,
        });
    };

    render(): JSX.Element {
        const { children, breadCrumbs, breakpoints, currentBreakpoint } = this.props;
        const { isCollapsed } = this.state;
        return (
            <Layout style={{ minHeight: '100vh' }} hasSider>
                {breakpoints[currentBreakpoint] > breakpoints.tablet ? (
                    <SideBar isCollapsed={isCollapsed} menuItems={MenuItems} width={200} />
                ) : (
                    <Drawer
                        maskClosable
                        closable={false}
                        onClose={this.toggle}
                        visible={!isCollapsed}
                        placement="left"
                        getContainer={false}
                        bodyStyle={{
                            padding: 0,
                            height: '100vh',
                        }}
                    >
                        <SideBar isCollapsed={false} menuItems={MenuItems} width={256} />
                    </Drawer>
                )}

                <Layout>
                    <HeaderNav
                        isCollapsed={isCollapsed}
                        toggle={this.toggle}
                        responsive={{ breakpoints, currentBreakpoint }}
                    />
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                        }}
                    >
                        <NavBreadCrumb breadCrumbs={breadCrumbs} />
                        {children}
                    </Content>
                    {/* <Footer /> */}
                </Layout>
            </Layout>
        );
    }
}

export default withBreakpoints(AdminLayout);
