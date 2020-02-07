/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';

const TabSection = (props): JSX.Element => {
    const { tabItems, activeTab, changeTab } = props;
    return (
        <div className="nav flex-column nav-pills">
            {tabItems.map((item, index) => {
                const { title } = item;
                return (
                    <a
                        key={index}
                        className={`nav-link ${index === activeTab ? 'active' : ''}`}
                        onClick={(): void => {
                            changeTab(index);
                        }}
                        onKeyDown={(): void => {
                            changeTab(index);
                        }}
                        role="button"
                        tabIndex={0}
                    >
                        <span>{title}</span>
                    </a>
                );
            })}
        </div>
    );
};

TabSection.defaultProps = {
    activeTab: 0,
};
TabSection.propTypes = {
    tabItems: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
        }),
    ).isRequired,
    activeTab: PropTypes.number,
    changeTab: PropTypes.func.isRequired,
};

export default TabSection;
