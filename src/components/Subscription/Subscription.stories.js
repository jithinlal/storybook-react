import React from 'react';
import Subscription from "./Subscription.jsx";


export default {
	title: 'form/Subscription',
	component: Subscription,
	tags: ['autodocs'],
};

export const PrimarySubscription = {}

export const CancelSubscription = {
	args: {
		size: 'small',
		buttonVariant: 'error',
	}
}