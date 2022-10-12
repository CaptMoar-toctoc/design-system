import React, { FC } from 'react';
import { iProps } from './iProps';
import { ThemeProvider } from '@mui/material';
import theme from '../../theme/theme';
import { styled } from '@mui/material/styles';

import { Icon } from '../../atoms';

const RRSS: FC<iProps> = ({
	color,
	clase,
	sizeIcon
}) => {

	const RRSSstyled = styled('div')(() => ({
		display: 'flex', 
		gap: '1rem',
		'svg':{
			fill:'transparent',
			stroke: color || '#000000'
		}
	
	}));

	const _sizeIcon = sizeIcon || 16;

	return (
		<ThemeProvider theme={theme}>
			<RRSSstyled className={`${clase}`} >
				<a href="https://www.instagram.com/toctoccom/" target={'_blank'}><Icon name="instagram" size={_sizeIcon} /></a>
				<a href="https://www.facebook.com/toctoccom/" target={'_blank'}><Icon name="facebook" size={_sizeIcon} /></a>
				<a href="https://www.linkedin.com/company/toctoc.com/" target={'_blank'}><Icon name="linkedin" size={_sizeIcon} /></a>
				<a href="https://www.youtube.com/user/TocTocChile" target={'_blank'}><Icon name="youtube" size={_sizeIcon} /></a>
			</RRSSstyled>
		</ThemeProvider>
	);
}
export default RRSS;