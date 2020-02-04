import React from 'react';
import PropTypes from 'prop-types';

// TODO: Fix Button Type

const ButtonComponent = (props) => {
  const { className, onClick, title } = props;
  return (
    <>
      <button type="submit" className={`btn ${className}`} onClick={onClick}>
        {title}
      </button>
    </>
  );
};

ButtonComponent.defaultProps = {
  className: '',
  onClick: () => {},
};

ButtonComponent.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired,
};

export default ButtonComponent;
