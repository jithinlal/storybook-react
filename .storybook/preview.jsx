/** @type { import('@storybook/react').Preview } */
import React from "react";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/material-icons';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { lightTheme, darkTheme } from '../src/themes.js';

export const decorators = [
	withThemeFromJSXProvider({
		themes: {
			light: lightTheme,
			dark: darkTheme,
		},
		defaultTheme: 'light',
		Provider: ThemeProvider,
		GlobalStyles: CssBaseline,
	}),
	(Story) => {
		console.log("global decorator");

		return <div>
			<Story/>
		</div>
	}
];

const preview = {
	parameters: {
		controls: {
			expanded: true,
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		options: {
			storySort: (a, b) =>
				a.id === b.id
					? 0
					: a.id.localeCompare(b.id, undefined, { numeric: true }),
		},
	},
};

export default preview;
