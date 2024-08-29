import React from 'react';

import {Box as MuiBox} from '@mui/material'
import PropTypes from 'prop-types';

function Center({children}) {
    return (
        <MuiBox
            display='flex'
            flexDirection='column'
            justifyContent='center'
            sx={{ width: '100%', maxWidth: '400px', margin: '0 auto' }}
        >
            {children}
        </MuiBox>
    )
}

Center.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Center;