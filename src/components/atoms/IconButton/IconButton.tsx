import React, { FC } from 'react';
import { iProps } from './iProps';
import { IconButton as IconButtonMUI, ThemeProvider } from '@mui/material';
import theme from '../../theme/theme';

const IconButton: FC<iProps> = ({
	children,
	handlerFn,
	iconAriaLabel,
	size
}) => {
	return (
		<ThemeProvider theme={theme}>
			<IconButtonMUI
				onClick={handlerFn}
				aria-label={iconAriaLabel}
				size={size}
			>
				{children}
			</IconButtonMUI>
		</ThemeProvider>
	);
}
export default IconButton;