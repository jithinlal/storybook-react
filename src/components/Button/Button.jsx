import React from "react";
import PropTypes from 'prop-types';
import {
    Button as MuiButton
} from '@mui/material';


function Button(props) {
    const {variant = 'primary', children, ...rest} = props

    return (
        <MuiButton color={variant} variant='outlined' {...rest}>
            {children}
        </MuiButton>
    )
}

Button.propTypes = {
    variant: PropTypes.string,
    children: PropTypes.node.isRequired
}

export default Button