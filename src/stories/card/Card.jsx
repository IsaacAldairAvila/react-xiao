import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const Card = ({label, ...props }) => {
  return (
    <button
      type="button"
      {...props}
    >
      {label}
    </button>
  );
};

Card.propTypes = {
  label: PropTypes.string.isRequired,
};

Card.defaultProps = {
    label: 'hola'
};