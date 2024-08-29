import React from 'react'
import PropTypes from "prop-types";
// import './input.css'
import {TextField as MuiTextField} from "@mui/material";

function Input(props) {
    const {size = 'medium', placeholder, ...rest} = props

    return (
        <MuiTextField type="text" label={placeholder} {...rest} size={size}/>
    )
}

Input.propTypes = {
    size: PropTypes.oneOf(['small', 'medium']),
    placeholder: PropTypes.string,
}

Input.defaultProps = {
    size: 'medium',
    placeholder: 'placeholder'
}

export default Input