import React from 'react'
import PropTypes from "prop-types";
import './input.css'

function Input(props) {
    const {size = 'medium', placeholder, ...rest} = props

    return (
        <input type="text" className={`input ${size}`} {...rest} placeholder={placeholder}/>
    )
}

Input.propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    placeholder: PropTypes.string,
}

Input.defaultProps = {
    size: 'medium',
    placeholder: 'placeholder'
}

export default Input