import React, { FC } from 'react';
import { iProps } from './iProps';
import { ThemeProvider, Slider as SliderTT } from '@mui/material';

import theme from '../../theme/theme';

const Slider: FC<iProps> = ({
	handlerFn,
	disabled,
	customStyleObject,
	defaultValue
}) => {
	return (
			<ThemeProvider theme={theme}>

					<SliderTT
						valueLabelDisplay="auto"
						sx={customStyleObject}
						disabled={disabled}
						defaultValue={defaultValue}
					/>

			</ThemeProvider>
	);
}

export default Slider;