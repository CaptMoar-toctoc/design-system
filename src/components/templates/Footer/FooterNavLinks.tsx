import React, { FC } from 'react';
import { iProps } from './iProps';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import theme from '../../theme/theme';

const DetailsStyled = styled('details')<any>(({ theme }) => ({
	'summary': {
		color: theme.palette.secondary.main,
		width: '34%',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		'svg': {
			fill: theme.palette.secondary.main,
			[theme.breakpoints.up('md')]: {
				display: 'none'
			}
		},
		fontSize: 12,
		fontWeight: 700,
		[theme.breakpoints.up('md')]: {
			fontSize: 16,
		}
	},
	'&[open]>summary:first-of-type svg': {
		transform: 'rotate(180deg)'
	},
	'ul': {
		listStyle: 'none',
		padding: 0,
		fontSize: 12,
		margin: 0,
		'a': {
			color: theme.palette.white,
			textDecoration: 'none',
			margin: '8px 0',
			display: 'block'
		},
		[theme.breakpoints.up('md')]: {
			fontSize: 14,
		}

	}

}));

const FooterNavLinks: FC<iProps> = ({ data, ...props }) => {

	const masQueMD = useMediaQuery(theme.breakpoints.up('md'));

	let urlBase = props.urlBase ?? 'https://www.toctoc.com/';
	urlBase = urlBase.slice(-1) == "/" ? urlBase + "" : urlBase + "/";

	interface IMenuButtons {
		origen: string,
		origenFooter: string,
		target: string,
		title: string,
		menu: any,
		link: string
	}


	const IcoDown = () => {
		return (
			<svg xmlns="http://www.w3.org/2000/svg" width="11" height="6" viewBox="0 0 11 6">
				<path d="M5.707 5.74a.6.6 0 00.356-.149l4.74-4.173a.572.572 0 00.184-.551.584.584 0 00-.396-.431.603.603 0 00-.58.12L5.667 4.381 1.322.556a.603.603 0 00-.58-.12.584.584 0 00-.396.431.572.572 0 00.184.551l4.74 4.173a.6.6 0 00.437.149z"></path>
			</svg>
		);
	}


	const renderMenu = (items: Array<IMenuButtons>) => {
		return <ul>
			{items.map((item: IMenuButtons, i: number) => {

				let origen = "?o=" + data.origenFooter + (item.origen !== undefined ? "_" + item.origen : "");

				return <li key={"lnk" + i}>
					<a
						href={item.target == "_blank" ? item.link : urlBase + item.link + origen}
						target={item.target}
					>{item.title}
					</a>
					{item.menu && renderMenu(item.menu)}
				</li>
			})}
		</ul>
	}

	const renderDetails = (arrMenuBtns: Array<IMenuButtons>) => {
		return arrMenuBtns.map((item: IMenuButtons, i: number) => {
			return (
				<Grid component={'div'} xs={12} md={3}>
					<DetailsStyled key={"detail" + i} open={masQueMD}>
						<summary>{item.title} <IcoDown /></summary>
						{item.menu && renderMenu(item.menu)}
					</DetailsStyled>

				</Grid>
			)
		})

	}

	return renderDetails(data.menu)
}
export default FooterNavLinks;