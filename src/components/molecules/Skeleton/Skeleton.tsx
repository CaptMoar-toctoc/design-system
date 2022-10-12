import React, { FC } from 'react';
import { Skeleton as SkeletonMUI } from '@mui/material';
import { iProps } from './iProps';
import { ThemeProvider } from '@mui/material';
import theme from '../../theme/theme';

const Skeleton: FC<iProps> = ({ variant, width, height, component }) => {
	return (
		<ThemeProvider theme={theme}>
			<SkeletonMUI
				variant={variant}
				width={width}
				height={height}
				component={component}
			/>
		</ThemeProvider>
	);
}
export default Skeleton;