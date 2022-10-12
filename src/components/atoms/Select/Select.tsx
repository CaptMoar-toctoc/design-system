import React, { FC } from 'react';
import { iProps } from './iProps';
import { ThemeProvider, Select as SelectTT } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';

import theme from '../../theme/theme';

const Select: FC<iProps> = ({
	label,
	name,
	value,
	handlerFn,
	disabled,
	options,
	defaultValue,
	error,
	helperText
}) => {


	const OptionsList = options.map(function(op:any){
		return <MenuItem key={`k-${op.value}`} value={op.value}>{op.label}</MenuItem>
	});

	return (
		<ThemeProvider theme={theme}>

			<FormControl fullWidth error={error}>
				<InputLabel id={`${name}-select-label`}>{label}</InputLabel>
				<SelectTT
					labelId={`${name}-select-label`}
					id={`${name}-select`}
					value={value}
					label={label}
					disabled={disabled}
					defaultValue={ defaultValue }
					autoWidth={false}
					displayEmpty={true}
				// onChange={handleChange}
				>
					{OptionsList}
				</SelectTT>
				<FormHelperText>Hola, soy texto</FormHelperText>
			</FormControl>

		</ThemeProvider>
	);
}

export default Select;