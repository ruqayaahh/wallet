import React from 'react';
import PropTypes from 'prop-types';
import './form-container.css';

const FormContainer = ({children, style, ...rest}) => {
    return (
        <form className="form-container" style={style} {...rest}>
           {children}
        </form>
    );
}
export default FormContainer;

FormContainer.propTypes = {
    style: PropTypes.object,
};