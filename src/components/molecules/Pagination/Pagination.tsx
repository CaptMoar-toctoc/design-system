import React, { FC } from 'react';
import { Pagination as PaginationMUI } from '@mui/material';
import { iProps } from './iProps';
import { ThemeProvider } from '@mui/material';
import theme from '../../theme/theme';

const Pagination: FC<iProps> = ({ count, defaultPage,siblingCount,showFirstLastButton,handlePagination }) => {
	return (
		<ThemeProvider theme={theme}>
			<PaginationMUI
				count={count}
				color="primary"
				size="large"
				defaultPage={defaultPage}
				showFirstButton={showFirstLastButton}
				showLastButton={showFirstLastButton}
				siblingCount={siblingCount}
				onChange={handlePagination}
			/>
		</ThemeProvider>
	);
}
export default Pagination;