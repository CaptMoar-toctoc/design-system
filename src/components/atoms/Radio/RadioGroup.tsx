import React, { FC } from 'react';
import { iProps } from './iProps';
import { RadioGroup as RadioGroupTT, ThemeProvider } from '@mui/material';

import theme from '../../theme/theme';

const RadioGroup: FC<iProps> = ({
	children,
	defaultValue,
	name,
	onChange,
	value
}) => {
	return (
		<ThemeProvider theme={theme}>

			<RadioGroupTT
				name={`${name}-radio-buttons-group`}
				aria-labelledby={`${name}-radio-buttons-group-label`}
				defaultValue={defaultValue}
				onChange={onChange}
				value={value}
				row
			>
				{children}
			</RadioGroupTT>

		</ThemeProvider>
	);
}

export default RadioGroup;