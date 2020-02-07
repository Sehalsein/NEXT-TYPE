import React from 'react';
import PropTypes from 'prop-types';
import TabSection from '@components/TabBuilder/TabSection';
import TabView from '@components/TabBuilder/TabView';

type State = {
    activeTab: number;
    activeView: number;
};

type Props = {
    tabConfig: any;
};

class TabBuilder extends React.Component<Props, State> {
    constructor(props) {
        super(props);

        this.state = {
            activeTab: 0,
            activeView: 0,
        };
    }

    changeTab = (tabIndex: number): void => {
        this.setState({
            activeTab: tabIndex,
            activeView: 0,
        });
    };

    changeView = (viewIndex: number): void => {
        this.setState({
            activeView: viewIndex,
        });
    };

    render(): JSX.Element {
        const { tabConfig } = this.props;
        const { activeTab, activeView } = this.state;

        const currentTab = tabConfig[activeTab];

        let currentComponent = null;

        if (currentTab.component) {
            if (Array.isArray(currentTab.component)) {
                currentComponent = currentTab.component[activeView];
            } else {
                currentComponent = currentTab.component;
            }
        }

        return (
            <div className="tab-style-1">
                <TabSection tabItems={tabConfig} activeTab={activeTab} changeTab={this.changeTab} />
                <TabView
                    title={currentTab.title}
                    component={currentComponent}
                    isCard={currentTab.isCard}
                    onViewChange={this.changeView}
                />
            </div>
        );
    }
}

export default TabBuilder;
