import React from "react";
import PropTypes from 'prop-types';
import './button.css'

function Button(props) {
    const {variant = 'primary', children, ...rest} = props

    return (
        <button className={`button ${variant}`} {...rest}>
            {children}
        </button>
    )
}

Button.propTypes = {
    variant: PropTypes.string,
    children: PropTypes.node.isRequired
}

export default Button