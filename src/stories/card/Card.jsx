import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.css'
/**
 * Primary UI component for user interaction
 */
export const Card = ({label, ...props }) => {
  return (
    <button
    className={styles.card}
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