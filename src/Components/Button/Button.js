import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.css';

const Button = ({title, type, loading, disabled, ...rest}) => {
    return (
            <button {...rest} type={type ? type : 'button' } className={!disabled ? styles.notDisabled : styles.disabled}>
                {title}
            </button>
    );
}

export default Button;

Button.propTypes = {
    title: PropTypes.string.isRequired,
};