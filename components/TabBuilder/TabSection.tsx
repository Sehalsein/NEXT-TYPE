/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { Tabs } from 'antd';
import { Media } from 'react-breakpoints';

const { TabPane } = Tabs;

const TabSection = (props): JSX.Element => {
    const { tabItems, onViewChange } = props;
    return (
        <Media>
            {({ breakpoints, currentBreakpoint }) => (
                <Tabs
                    tabPosition={breakpoints[currentBreakpoint] > breakpoints.tablet ? 'left' : 'top'}
                    size="large"
                    destroyInactiveTabPane
                >
                    {tabItems.map((item, index) => {
                        const { title, components, activeView } = item;

                        return (
                            <TabPane tab={title} key={index.toString()}>
                                {components[activeView] ? (
                                    React.cloneElement(components[activeView], {
                                        onViewChange: viewIndex => {
                                            onViewChange(viewIndex, index);
                                        },
                                    })
                                ) : (
                                    <h1>{title}</h1>
                                )}
                            </TabPane>
                        );
                    })}
                </Tabs>
            )}
        </Media>
    );
};

TabSection.defaultProps = {
    onViewChange: (): void => {},
};
TabSection.propTypes = {
    tabItems: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            components: PropTypes.element,
        }),
    ).isRequired,
    onViewChange: PropTypes.func,
};

export default TabSection;
