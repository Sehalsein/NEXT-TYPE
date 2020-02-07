import React from 'react';
import PropTypes from 'prop-types';

const UserTab = (props): JSX.Element => {
    const { title, onViewChange } = props;
    return (
        <>
            <h1>{title}</h1>
            <button
                type="button"
                onClick={() => {
                    onViewChange(2);
                }}
            >
                Add
            </button>
            <button
                type="button"
                onClick={() => {
                    onViewChange(1);
                }}
            >
                View
            </button>
        </>
    );
};

UserTab.defaultProps = {
    onViewChange: (): void => {},
};

UserTab.propTypes = {
    title: PropTypes.string.isRequired,
    onViewChange: PropTypes.func,
};

export default UserTab;
