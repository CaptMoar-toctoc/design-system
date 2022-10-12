import React, { FC } from 'react';
import { iProps } from './iProps';

import { Checkbox as CheckboxMUI, ThemeProvider } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';

import theme from '../../theme/theme';

const Checkbox: FC<iProps> = ({
	id,
	checked,
    handlerFn,
    texto,
    disabled,
    customStyleObject,
	defaultChecked,
	value
}) => {
	return (
		<ThemeProvider theme={theme}>

			<FormControlLabel control={

				<CheckboxMUI
					id={id}
					onChange={handlerFn}
					disabled={disabled}
					sx={customStyleObject}
					defaultChecked={defaultChecked}
					checked={checked}
					value={value}
				/>

			} label={texto} />

		</ThemeProvider>
	);
}

export default Checkbox;