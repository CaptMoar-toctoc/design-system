import React, { FC } from 'react';
import DialogActions from '@mui/material/DialogActions';
import { ThemeProvider } from '@mui/material';
import theme from '../../theme/theme';
import { iModalActionsProps } from './iProps';

const ModalActions: FC<iModalActionsProps> = ({
	disableSpacing,
	children
}) => {

	return (
		<ThemeProvider theme={theme}>
			<DialogActions disableSpacing={disableSpacing}>
				{children}
			</DialogActions>
		</ThemeProvider>
	);
}
export default ModalActions;