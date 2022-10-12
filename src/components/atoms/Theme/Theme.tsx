import React, { FC } from 'react';
import { iProps } from './iProps';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from '../../theme/theme';

const Theme: FC<iProps> = ({
	children
}) => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
}

export default Theme;