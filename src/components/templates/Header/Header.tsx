import { FC, useState } from 'react';
import { Box, Container, Link, ThemeProvider, Toolbar } from '@mui/material';
import { iHeaderOptions, iImg, iProps } from './iProps';
import theme from '../../theme/theme';
import styled from '@emotion/styled';
import { Button, Icon } from '../../atoms';

const imgDefault: iHeaderOptions = {
    "id": 1,
    "class": "",
    "tipo": "logo",
    "img": [
        {
            "dispositivo": "mobile",
            "src": "https://d1cfu8v5n1wsm.cloudfront.net/toctoc/img/logos/brand/logo-tt-v.svg",
            "alt": "descripcion-foto",
            "url": "https://www.toctoc.com/"
        },
        {
            "dispositivo": "desktop",
            "src": "https://d1cfu8v5n1wsm.cloudfront.net/toctoc/img/logos/brand/logo-tt-h.svg",
            "alt": "descripcion-foto",
            "url": "https://www.toctoc.com/"
        }
    ],
    "icono": null,
    "navegable": false,
    "target": "",
    "mobile": {
        "visible": true,
        "posicion": "superior"
    }
};



const Header: FC<iProps> = ({ headerOptions, isMobile }) => {
    const [abrirMenu, setAbrirMenu] = useState(false);

    const abrirmenu = () => setAbrirMenu(true);
    const cerrarmenu = () => setAbrirMenu(false);

    const _handlerAbrirMenu = (abrirMenu: boolean) => abrirMenu ? cerrarmenu() : abrirmenu();

    const iconoMenu = (abrirMenu: boolean) => {
        return abrirMenu ? <Icon name={'x-burger'} color={'#3200c1'} size={24} /> : <Icon name={'burger'} color={'#3200c1'} size={24} />;
    };
    let arrEstructura = headerOptions ?? [];
    const tipoLogo: iHeaderOptions = arrEstructura.filter((entrada: iHeaderOptions) => entrada.tipo === 'logo').shift() ?? imgDefault;
    const LogoDesktop = tipoLogo.img?.find((imagen: iImg) => imagen.dispositivo === 'desktop');
    const tipoEnlaceSimple = arrEstructura.filter((entrada) => entrada.tipo === 'enlace-simple');
    const LogoMobile = tipoLogo.img?.find((imagen: iImg) => imagen.dispositivo === 'mobile');

    const entradaMenu = (listaEntradas: any, posicion: string, mobile: any, clase?: string) => listaEntradas.filter((entrada: any) => {
        return entrada.posicion === posicion || mobile && entrada.mobile.visible === mobile.visible && entrada.mobile.posicion === mobile.posicion;
    }).map((entrada: any) => {
        // const Icono = entrada.icono && Ico[entrada.icono] !== undefined ? Ico[entrada.icono] : null;
        return (
            <div key={`id-${entrada.id}`}>
                {entrada.tipo === 'enlace-simple' && entrada.texto !== 'Publicar' &&
                    <Link className={`links-ds ${clase}`} marginRight={3} color='primary' variant='body1' underline='none' href={entrada.url} >
                        {entrada.icono && <Icon name={entrada.icono} color={'#3200c1'} size={32} className={'icon'} />}<span className='text-links-der-ds'>{entrada.texto}</span> {entrada.navegable && <Icon name='chevron' color={'#3200c1'} size={24} className={'icon'} />}
                    </Link>}
                {entrada.texto === 'Publicar' && <Button variant='contained' color='secondary' texto={entrada.texto} handlerFn={() => { }} />}
            </div>
        );
    });

    const RenderHeaderDesktop = () => {
        return (
            <HeaderStyled color='white'>
                <Toolbar className='container-header-desk-ds'>
                    <Link marginRight={8} color='primary' variant='button' underline='none' href={LogoDesktop?.url} ><img style={{ 'width': '183px' }} src={LogoDesktop!.src} /></Link>
                    <Box className='opciones-iz-ds' sx={{ flexGrow: 1, display: 'flex' }}>
                        {entradaMenu(tipoEnlaceSimple, 'izquierda', false, 'links-iz-ds')}
                    </Box>
                    <Box sx={{ flexGrow: 0, display: { md: 'flex' } }} className='box-derecha-ds'>
                        {entradaMenu(tipoEnlaceSimple, 'derecha', false, 'links-der-ds')}
                    </Box>
                </Toolbar>
            </HeaderStyled>
        )
    }
    const RenderHeaderMobile = () => {
        return (
            <HeaderStyled color='white'>
                <div className='container-header-mob-ds'>
                    <Box className='box-mob-header-ds'>
                        <a onClick={() => _handlerAbrirMenu(abrirMenu)} >{iconoMenu(abrirMenu)}</a>
                        <Link color='primary' variant='button' underline='none' href={LogoMobile?.url} ><img style={{ 'width': '75px' }} src={LogoMobile!.src} /></Link>
                        {entradaMenu(tipoEnlaceSimple, '', { visible: true, posicion: 'superior' })}
                    </Box>
                    <Box className='box-derecha-ds links-sup-header-mob-ds'>
                        {entradaMenu(tipoEnlaceSimple, 'izquierda', false, 'links-iz-ds')}
                    </Box>
                </div>
                {
                    abrirMenu &&
                    <>
                        <div className='contenedorLoginAyuda'>
                            {/* contendio menu futuro */}
                            <div className='contenedor-opciones-ds'>
                                {entradaMenu(tipoEnlaceSimple, '', { visible: false, posicion: 'inferior' }, 'links-inferiores-ds')}
                            </div>
                        </div>
                    </>
                }
            </HeaderStyled>
        )
    }
    return (
        <ThemeProvider theme={theme}>
            {isMobile
                ? <RenderHeaderMobile />
                : <Container><RenderHeaderDesktop /></Container>
            }
        </ThemeProvider>
    );
}

const HeaderStyled = styled('div')<any>(({ theme }) => ({
    '.text-links-der-ds': {
        color: theme.palette.primary.main,
        paddingRight: 16,
        paddingLeft: 16,
    },
    '.links-ds': {
        textDecoration: 'none',
        color: theme.palette.primary.main,
    },
    [theme.breakpoints.down('md')]: {
        '.icon': {
            stroke: '#fff',
            height: 24,
            width: 24
        },
        '.container-header-desk-ds': {
            display: 'none',
        },
        '.container-header-mob-ds': {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
        },
        '.box-mob-header-ds': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 2,
            width: '100%',
            padding: '16px',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.05)',
        },
        '.links-sup-header-mob-ds': {
            flexGrow: 0,
            display: 'flex',
            justifyContent: 'start',
            width: '100%',
            padding: '8px 16px '
        },
        '.contenedor-opciones-ds': {
            display: 'flex',
            flexDirection: 'column-reverse',
            paddingBottom: '16px ',
            backgroundColor: '#3200c1',
            '.ico-chevron': {
                transform: 'rotate(-90deg)',
                marginLeft: 120,
            },
        },

        '.links-inferiores-ds': {
            display: 'flex',
            alignItems: 'center',
            padding: '16px',
            color: '#fff',
        },
    },
    [theme.breakpoints.up('md')]: {
        '.container-header-mob-ds': {
            display: 'none',
        },
        '.links-iz-ds:hover': {
            borderBottom: '4px solid #37ffdb'
        },
        '.links-ds': {
            fontSize: 18,
            height: '100%'
        },
        '.box-derecha-ds': {
            flexGrow: 0,
            display: 'flex',
            alignItems: 'center',
        },
        '.links-der-ds': {
            display: 'flex',
            alignItems: 'center',
        },
        '.text-links-der-ds': {
            paddingRight: 8,
            paddingLeft: 8,
        },
        '.opciones-iz-ds': {
            color: theme.palette.primary.main,
            '& a:hover': {
                color: theme.palette.primary.main,
                textDecoration: 'none'
            }
        },
    }
}));

export default Header;