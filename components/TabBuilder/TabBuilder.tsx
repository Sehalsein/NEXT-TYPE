import React from 'react';
import PropTypes from 'prop-types';
import TabSection from '@components/TabBuilder/TabSection';
import TabView from '@components/TabBuilder/TabView';
import { Card } from 'antd';

type State = {
    formItems: any;
};

type Props = {
    tabConfig: any;
};

class TabBuilder extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        const { tabConfig } = this.props;
        this.state = {
            formItems: tabConfig.map(item => ({ ...item, activeView: 0 })),
        };
    }

    changeView = (viewIndex: number, itemIndex: number): void => {
        this.setState(prevState => {
            prevState.formItems.splice(itemIndex, 1, {
                ...prevState.formItems[itemIndex],
                activeView: viewIndex,
            });
            return {
                formItems: [...prevState.formItems],
            };
        });
    };

    render(): JSX.Element {
        const { formItems } = this.state;

        return (
            <Card>
                <TabSection tabItems={formItems} onViewChange={this.changeView} />
            </Card>
        );
    }
}

export default TabBuilder;
