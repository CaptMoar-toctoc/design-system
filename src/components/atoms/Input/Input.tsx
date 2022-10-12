import React, { FC } from 'react';
import { iProps } from './iProps';
import { ThemeProvider, TextField as InputTT } from '@mui/material';

import theme from '../../theme/theme';

const Input: FC<iProps> = ({
	onChange,
	label,
	type,
	disabled,
	customStyleObject,
	defaultValue,
	error,
	fullWidth,
	helperText,
	size,
	value,
	name
}) => {
	return (
		<ThemeProvider theme={theme}>

			<InputTT
				label={label}
				value={value}
				type={type}
				sx={customStyleObject}
				disabled={disabled}
				defaultValue={defaultValue}
				error={error}
				fullWidth={fullWidth}
				helperText={helperText}
				size={size}
				name={name}
				onChange={onChange}
			/>

		</ThemeProvider>
	);
}

export default Input;