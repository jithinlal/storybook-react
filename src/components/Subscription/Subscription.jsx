import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button/Button.jsx'
import Input from '../Input/Input.jsx'


function Subscription(props) {
    const {size = 'medium', buttonVariant = 'primary'} = props

    return (
        <>
            <Input size={size} sx={{ marginBottom: '16px' }} />
            <Button variant={buttonVariant}>
                Subscribe
            </Button>
        </>
    )
}

Subscription.propTypes = {
    size: PropTypes.string,
    buttonVariant: PropTypes.string,
}

export default Subscription