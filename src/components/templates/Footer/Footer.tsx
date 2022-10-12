import React, { FC, useEffect, useState } from 'react';
import { iProps, iDataState } from './iProps';
import { Typography, Container, Link, ThemeProvider } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import RRSS from '../../molecules/RRSS/RRSS';
import FooterNavLinks from './FooterNavLinks';
import theme from '../../theme/theme';
import LinkTop from './LinkTop';

const StyledFooter = styled('footer')<any>(({ theme }) => ({
	color: theme.palette.white,
	backgroundColor: theme.palette.primary.main,
	padding: '1rem 0',
	fontFamily: 'nunito'
}));

const Footer: FC<iProps> = ({ footerOptions, claseAux, ...props }) => {

	let urlBase = props.urlBase ?? 'https://www.toctoc.com/';
	urlBase = urlBase.slice(-1) == "/" ? urlBase + "" : urlBase + "/";

	const [data, setData] = useState<iDataState>(footerOptions);

	useEffect(() => {
		setData(footerOptions);
	}, [footerOptions]);

	const LogoFooter = () => {

		const LogoHstyled = styled('img')(({ theme }) => ({
			display: 'none',
			[theme.breakpoints.up('sm')]: {
				display: 'block'
			}
		}));
		const LogoVstyled = styled('img')(({ theme }) => ({
			[theme.breakpoints.up('sm')]: {
				display: 'none'
			}
		}));

		return <>
			<LogoHstyled width={180} src="https://d2jd36q67phkec.cloudfront.net/toctoc/img/logos/brand/logo-tt-h-blanco.svg" alt="logo toctoc" />
			<LogoVstyled width={74} src="https://d2jd36q67phkec.cloudfront.net/toctoc/img/logos/brand/logo-tt-v-blanco.svg" alt="logo toctoc" />
		</>
	}

	const BloqueApp = () => {
		const AppStyled = styled('div')(() => ({
			margin: '2rem 0'
		}));
		return (
			<AppStyled>
				<div>
					<Typography color={theme.palette.secondary.main} sx={{ fontSize: { xs: 12, sm: 20 }, fontWeight: 700, marginBottom: 1 }}>
						<span style={{ display: 'block' }}>Descarga nuestra App</span> y encuentra tu hogar
					</Typography>
					<div>
						<Link href={data.app.appstore.link} marginRight={2}>
							<img src={data.app.appstore.logo} alt={data.app.appstore.alt} height={32} />
						</Link>
						<Link href={data.app.googleplay.link}>
							<img src={data.app.googleplay.logo} alt={data.app.googleplay.alt} height={32} />
						</Link>
					</div>
				</div>
			</AppStyled>
		)
	}

	const CopyrightText = () => {
		return (
			<Typography
				className='cc'
				sx={{
					fontSize: 12,
					[theme.breakpoints.up('md')]: {
						textAlign: 'center',
					}
				}}	>
				<span>TOCTOC SpA. © 2022</span> Reservados todos los derechos
			</Typography>
		)
	}


	return (
		<>
			{data.menu !== undefined && <LinkTop />}
			<ThemeProvider theme={theme}>
				<StyledFooter className={`${claseAux}`} >
					<Container>
						{data.menu !== undefined &&
							<Grid container spacing={2}>
								<Grid xs={12}>
									<LogoFooter />
								</Grid>

								<Grid sm={6} md={4}>

									<Typography variant='h4' fontSize={16} fontWeight={700} color={theme.palette.secondary.main} marginBottom={1}>Síguenos</Typography>

									<RRSS color={'#FFFFFF'} sizeIcon={24} />

									<Link href={data.contacto.link} target="_blank" fontSize={12} color={theme.palette.secondary.main} >{data.contacto.text}</Link>

									{/* APP */}
									{(data.app.appstore.link !== "") && (data.app.googleplay.link !== "") && <BloqueApp />}

								</Grid>

								<Grid container sm={6} md={8}>
									<FooterNavLinks data={data} urlBase={urlBase} />
								</Grid>

								<Grid xs={12} marginY={2}>
									<a href={data.selloCCS.link} target={'_blank'}>
										<img src={data.selloCCS.logo} alt={data.selloCCS.alt} height={72} />
									</a>
								</Grid>
							</Grid>
						}

						<CopyrightText />
					</Container>
				</StyledFooter>
			</ThemeProvider>



		</>
	);
}
export default Footer;