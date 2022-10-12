import React, { FC } from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import { ThemeProvider } from '@mui/material';
import theme from '../../theme/theme';
import { iModalTitleProps } from './iProps';

const ModalTitle: FC<iModalTitleProps> = ({
	children
}) => {

	return (
		<ThemeProvider theme={theme}>
			<DialogTitle>
				{children}
			</DialogTitle>
		</ThemeProvider>
	);
}
export default ModalTitle;