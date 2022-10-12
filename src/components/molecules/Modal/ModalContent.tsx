import React, { FC } from 'react';

import DialogContent from '@mui/material/DialogContent';

import { ThemeProvider } from '@mui/material';
import theme from '../../theme/theme';
import { iDialogContentProps } from './iProps';

const ModalContent: FC<iDialogContentProps> = ({
	dividers,
	children
}) => {

	return (
		<ThemeProvider theme={theme}>
			<DialogContent dividers={dividers}>
				{children}
			</DialogContent>
		</ThemeProvider>
	);
}
export default ModalContent;