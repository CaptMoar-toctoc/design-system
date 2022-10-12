import { FC } from "react";
import { ThemeProvider } from "@mui/material";
// import { styled } from '@mui/material/styles';
import styled from '@emotion/styled';
import { iProps } from "./iProps";
import theme from '../../theme/theme';
import { Icon } from "../../atoms";


const MenuFirstLevel: FC<iProps> = ({ listaOperaciones }) => {

	return (
		<ThemeProvider theme={theme}>
			<MenuFirstLevelStyled>
				<div className="box-principal-ds">
					{listaOperaciones?.map((entry) => {
						const { etiqueta, tieneSubmenu, tipo, url } = entry;
						return (
							<div key={tipo} className='menuItem' >
								<a onClick={() => console.log('clic')} href={url} rel="noopener" className='opcionNivelUno'>{etiqueta} {tieneSubmenu && <Icon name="chevron" color="#fff" />}</a>
							</div>
						);
					})}
				</div>
			</MenuFirstLevelStyled>
		</ThemeProvider>
	);
};
const MenuFirstLevelStyled = styled('div')<any>(({ theme }) => ({
	'.box-principal-ds': {
		background: theme.palette.primary.main,
	},
	'.menuItem': {
		color: '#fff',
		display: 'flex',
		cursor: 'pointer',
	},
	'.opcionNivelUno': {
		display: 'flex',
		alignItems: 'center',
		textDecoration: 'none',
		fontWeight: '400',
		lineHeight: '18px',
	},
	[theme.breakpoints.down('md')]: {
		'.menuItem': {
			flexDirection: 'column',
		},
		'.box-principal-ds': {
			maxWidth: '600px',
		},
		'.opcionNivelUno': {
			background: '#fff',
			justifyContent: 'space-between',
			padding: '24px 0',
			color: '#343A40',
			width: '100%',
			'& .ico-chevron': {
				stroke: '#666666',
				transform: 'rotate(-90deg)'
			}
		},

	},
	[theme.breakpoints.up('md')]: {
		'.box-principal-ds': {
			backgroundColor: theme.palette.primary.main,
			display: 'flex',
			height: 'auto',
		},
		'.menuItem': {
			alignItems: 'flex-start',
			margin: ' 0 20px',
		},
		'.opcionNivelUno': {
			color: ' #fff',
			padding: '20px 20px 20px 0',
			'&:hover': {
				color: theme.palette.secondary.main,
				'.ico-chevron': {
					stroke: theme.palette.secondary.main,
				}
			},
			'.ico-chevron': {
				marginLeft: '16px',
			}
		}
	}
}));
export default MenuFirstLevel;
