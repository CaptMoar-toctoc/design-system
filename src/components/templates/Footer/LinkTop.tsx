import React, { FC } from 'react';
import { styled } from '@mui/material/styles';

const LinkTopStyled = styled('a')<any>(({ theme }) => ({
	display: 'block',
	backgroundColor: theme.palette.primary.dark,
	padding: '1rem',
	textAlign: 'center',
	color: theme.palette.white,
	textDecoration: 'none',
	'&:hover':{
		textDecoration: 'none'
	},
	'svg': {
		fill: theme.palette.white,
		transform: 'rotate(180deg) translateY(2px)',
		marginRight: '1rem'
	}
}));

const LinkTop = () => {

	const IcoDown = () => {
		return (
			<svg xmlns="http://www.w3.org/2000/svg" width="11" height="6" viewBox="0 0 11 6">
				<path d="M5.707 5.74a.6.6 0 00.356-.149l4.74-4.173a.572.572 0 00.184-.551.584.584 0 00-.396-.431.603.603 0 00-.58.12L5.667 4.381 1.322.556a.603.603 0 00-.58-.12.584.584 0 00-.396.431.572.572 0 00.184.551l4.74 4.173a.6.6 0 00.437.149z"></path>
			</svg>
		);
	}

	return <LinkTopStyled href="#" ><IcoDown /> Subir</LinkTopStyled>
}
export default LinkTop;