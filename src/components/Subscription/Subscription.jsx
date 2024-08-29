import React from 'react';

import {Box as MuiBox} from "@mui/material";
import PropTypes from 'prop-types';

import Button from '../Button/Button.jsx'
import Input from '../Input/Input.jsx'


function Subscription(props) {
    const {size = 'medium', buttonVariant = 'primary'} = props

    return (
        <MuiBox
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            sx={{ width: '100%', maxWidth: '400px', margin: '0 auto' }}
        >
            <Input size={size} sx={{ marginBottom: '16px' }} />
            <Button variant={buttonVariant}>
                Subscribe
            </Button>
        </MuiBox>
    )
}

Subscription.propTypes = {
    size: PropTypes.string,
    buttonVariant: PropTypes.string,
}

export default Subscription