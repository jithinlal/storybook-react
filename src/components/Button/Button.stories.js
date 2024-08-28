import React from 'react'
import Button from './Button'

export default {
    title: 'Form/Button',
    component: Button,
    tags: ['autodocs'],
}

export const Primary = {
    args: {
        variant: 'primary',
        children: 'Primary',
    }
}

export const Secondary = {
    args: {
        variant: 'secondary',
        children: 'Secondary',
    }
}

export const Success = {
    args: {
        variant: 'success',
        children: 'Success',
    }
}

export const Danger = {
    args: {
        variant: 'danger',
        children: 'Danger',
    }
}