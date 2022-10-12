import React, { FC } from 'react';

import Dialog from '@mui/material/Dialog';

import { ThemeProvider } from '@mui/material';
import theme from '../../theme/theme';
import { iProps } from './iProps';

const Modal: FC<iProps> = ({
	open,
	handleClose,
	claseAux,
	fullScreen,
	fullWidth,
	maxWidth,
	scroll,
	children
}) => {

	return (
		<ThemeProvider theme={theme}>
			<Dialog
				open={open}
				onClose={handleClose}
				className={claseAux}
				fullScreen={fullScreen}
				fullWidth={fullWidth}
				maxWidth={maxWidth}
				scroll={scroll}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				{children}
			</Dialog>
		</ThemeProvider>
	);
}
export default Modal;