import React, { FC } from 'react';

import { Box, Typography, Card, CardMedia, CardActions, CardActionArea, IconButton, ThemeProvider } from '@mui/material';

import { iProps, programaProps, precioProps, labelCardProps } from './iProps';
import { styled } from '@mui/material/styles';
import { Icon } from '../../atoms';

import theme from '../../theme/theme';



const CardAdmin: FC<iProps> = ({
	cardTitle,
	programa,
	precio,
	clickDelete,
	propertyType,
	operationType,
	operationColor,
	commune,
	labelCard,
	imgUrl,
	publicada,
	destacada,
	lnk,
	hideActions,
	selectCard
}) => {


	const MiLabelCard: FC<labelCardProps> = ({ text, color, bg }) => {
		return <Box className='label-card' sx={{ color: color, backgroundColor: bg }}>{text}</Box>
	};

	let claseEstadoCard = destacada ? 'destacada' : '';
	claseEstadoCard = !publicada ? 'despublicada' : claseEstadoCard; //depublicada gana

	const ElPrograma: FC<programaProps> = ({ room, bath, mts }) => {
		const ProgramaStyled = styled(Box)<any>(() => ({
			display: 'flex',
			alignItems: 'center',
			gap: '1rem',
			fontSize: 12,
			marginBottom: '1rem',
			'div': {
				display: 'flex',
				alignItems: 'center',
			},

		}))
		return (<>
			<ProgramaStyled>
				{room ? <div><Icon name={'room'} /> <span>{room}</span></div> : null}
				{bath ? <div><Icon name={'bathrooms'} /> <span>{bath}</span></div> : null}
				{mts ? <div><Icon name={'meters'} /> <span>{mts}</span></div> : null}
			</ProgramaStyled>
		</>)
	};

	const ElPrecio: FC<precioProps> = ({ desde, hasta, simboloMoneda }) => {

		const PrecioStyled = styled(Typography)<any>(() => ({
			fontSize: 24,
			fontWeight: '700',
			'span': {
				fontSize: 14,
				display: 'block',
			}
		}))

		return (
			<PrecioStyled variant='h3'>
				{(hasta && desde !== hasta) ? <Box component={'span'}>Desde</Box> : null}
				<Box className='precio' component='strong'>{simboloMoneda} {desde}</Box>
			</PrecioStyled>
		)
	};


	return (
		<ThemeProvider theme={theme}>

			{cardTitle &&
				<CardAdminStyled className={`card-admin ${claseEstadoCard}`}>
					{!hideActions && <>
						<CardActions className='card-sec-l'>
							<Box className='int'>
								{selectCard}
							</Box>
						</CardActions>
						<CardActions className='card-sec-r'>
							<Box className='int'>
								<IconButton onClick={clickDelete} >
									<Icon name={'trash'} className={'icon-delete'} />
								</IconButton>
							</Box>
						</CardActions>
					</>
					}

					<CardActionArea className='card-main' LinkComponent={'a'} href={publicada && lnk?.url ? lnk.url : "#"} target={lnk?.target}>

						<Box className='card-content'>

							<Box className='card-img'>
								<CardMedia component='img' image={imgUrl} />
								{labelCard?.text && <MiLabelCard {...labelCard} />}
							</Box>

							<Box className='card-body'>
								<Typography variant='h4' className='proptype'>{propertyType} | <Box component='span' sx={{ color: operationColor }}>{operationType}</Box></Typography>
								<Typography className='comuna'><Icon name={'mappin'} /> {commune}</Typography>
								<Typography className='tt' variant='h3'>{cardTitle}</Typography>
								<ElPrograma {...programa} />
								<ElPrecio {...precio} />
							</Box>

						</Box>

					</CardActionArea>
				</CardAdminStyled>
			}

		</ThemeProvider>
	);
}

export default CardAdmin;

const CardAdminStyled = styled(Card)<any>(({ theme }) => ({
	'.card-sec-l': {
		width: '50%',
		float: 'left',
		padding: 0,
		display: 'block'
	},
	'.card-sec-r': {
		width: '50%',
		float: 'right',
		textAlign: 'right',
		padding: 0,
		display: 'block'
	},
	'.int': {
		padding: '1rem 1rem 0 1rem'
	},
	'.card-main': {
		float: 'none',
		clear: 'both',
		padding: '1rem'
	},
	'.card-content': {
		display: 'flex',
		flexDirection: 'column',
		gap: '1rem',
		'svg': {
			marginRight: '.25rem',
			stroke: '#666'
		},
	},
	'.card-img': {
		position: 'relative',
		height: '176px',
		overflow: 'hidden',
		borderRadius: '10px',
		'img': {
			borderRadius: '10px',
		}
	},
	'.label-card': {
		position: 'absolute',
		left: 0,
		top: '1rem',
		fontSize: 14,
		borderTopRightRadius: 4,
		borderBottomRightRadius: 4,
		padding: '0.25rem 1rem'
	},
	'.proptype': {
		fontSize: 12,
		borderRadius: 4,
		backgroundColor: '#EEE',
		display: 'inline-block',
		padding: '1px 8px',
		marginBottom: '8px',
	},
	'.comuna': {
		display: 'flex',
		alignItems: 'center',
		fontSize: 12,
		marginBottom: '1rem'
	},
	'.tt': {
		fontSize: 18,
		fontWeight: '700',
		marginBottom: '.5rem'
	},
	'&.despublicada': {
		'img': {
			filter: 'grayscale(100%)',
			opacity: '.5'
		},
		'.label-card': {
			color: '#FFF',
			backgroundColor: '#E63946',
		},
	},
	'.icon-delete': {
		width: '24px',
		height: '24px',
		stroke: '#666'
	},
	'.ico-mappin':{
		stroke: '#666'
	},
	[theme.breakpoints.up('sm')]: {
		display: 'flex',
		alignItems: 'center',
		'.card-sec-l': {
			order: 1,
			flexBasis: 0,
		},
		'.card-sec-r': {
			order: 3,
			flexBasis: 0,
		},
		'.int': {
			padding: '1rem'
		},
		'.card-main': {
			order: 2,
			flexBasis: '100%',
			padding: '1rem'
		},
		'.card-content': {
			flexDirection: 'row'
		},
		'.card-img': {
			width: '224px',
		},
	}
}));