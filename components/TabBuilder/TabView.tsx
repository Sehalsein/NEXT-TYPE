import React from 'react';
import PropTypes from 'prop-types';

const TabView = (props): JSX.Element => {
    const { title, component, isCard, onViewChange } = props;

    return (
        <div className="tab-content">
            <div className={isCard ? 'box-card' : ''}>
                {component ? React.cloneElement(component, { onViewChange }) : <h1>{title}</h1>}
            </div>
        </div>
    );
};

TabView.defaultProps = {
    component: null,
    isCard: true,
    onViewChange: (): void => {},
};

TabView.propTypes = {
    title: PropTypes.string.isRequired,
    component: PropTypes.element,
    isCard: PropTypes.bool,
    onViewChange: PropTypes.func,
};

export default TabView;
