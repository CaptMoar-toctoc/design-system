import React, { FC } from 'react';
import { iProps } from './iProps';
import { Button as ButtonMUI, ThemeProvider } from '@mui/material';
import theme from '../../theme/theme';

const Button: FC<iProps> = ({
	children,
	texto,
	handlerFn,
	disabled,
	customStyleObject,
	widthBoolean,
	color,
	variant,
	size,
	href
}) => {
	return (
		<ThemeProvider theme={theme}>

			<ButtonMUI
				variant={variant}
				color={color}
				onClick={handlerFn}
				disabled={disabled}
				sx={customStyleObject}
				fullWidth={widthBoolean}
				size={size}
				href={href}
			>
				{children}{texto}
			</ButtonMUI>

		</ThemeProvider>
	);
}

export default Button;