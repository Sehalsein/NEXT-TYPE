import React from 'react';
import PropTypes from 'prop-types';
import ButtonComponent from '@components/FormComponents/ButtonComponent';

const CountriesAdd = (props): JSX.Element => {
    const { onViewChange } = props;
    return (
        <ButtonComponent
            title="Close"
            onClick={() => {
                onViewChange(0);
            }}
        />
    );
};

CountriesAdd.defaultProps = {
    onViewChange: (): void => {},
};

CountriesAdd.propTypes = {
    onViewChange: PropTypes.func,
};

export default CountriesAdd;
