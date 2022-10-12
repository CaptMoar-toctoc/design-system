import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Footer from './Footer';

const footerOptions = {
	"origenFooter": "footer",
	"menu": [
		{
			"link": "",
			"title": "Nosotros",
			"menu": [
				{
					"link": "somos",
					"title": "Quiénes somos",
					"target": ""
				},
				{
					"link": "https://d1cfu8v5n1wsm.cloudfront.net/gestioncorredor/terminosycondiciones/terminos_y_condiciones.pdf",
					"title": "Términos y condiciones",
					"target": "_blank"
				},
				{
					"link": "https://blog.toctoc.com/",
					"title": "Blog",
					"target": "_blank"
				},
				{
					"link": "https://api.toctoc.com/docs/",
					"title": "Documentación API",
					"target": "_blank"
				}
			]
		},
		{
			"link": "",
			"title": "Ayuda",
			"menu": [
				{
					"link": "https://ayuda.toctoc.com/hc/es-419/requests/new",
					"title": "Contáctanos",
					"target": "_blank"
				},
				{
					"link": "https://ayuda.toctoc.com/hc/es-419/",
					"title": "Preguntas frecuentes",
					"target": "_blank"
				}
			]
		},
		{
			"link": "",
			"title": "Personas",
			"menu": [
				{
					"link": "publicar",
					"title": "Publicar",
					"target": ""
				},
				{
					"link": "arriendo",
					"title": "Arrendar",
					"target": ""
				},
				{
					"link": "venta",
					"title": "Comprar",
					"target": ""
				},
				{
					"link": "retasalo",
					"title": "Tasar",
					"target": ""
				},
				{
					"link": "ofertas-toctoc",
					"title": "Reservar",
					"target": ""
				},
				{
					"link": "financiamiento",
					"title": "Financiamiento",
					"target": ""
				}
			]
		},
		{
			"link": "",
			"title": "Empresas",
			"menu": [
				{
					"link": "empresas/informacion-comercial",
					"title": "Publica con nosotros",
					"target": "",
					"origen": "publicar"
				},
				{
					"link": "retasalo",
					"title": "Tasar",
					"target": ""
				},
				{
					"link": "empresas/infogis",
					"title": "Infogis",
					"target": ""
				},
				{
					"link": "http://www.infoinmobiliario.cl/",
					"title": "InfoInmobiliario",
					"target": "_blank"
				},
				{
					"link": "empresas/informacion-comercial",
					"title": "Inforenta",
					"target": "",
					"origen": "inforenta"
				},
				{
					"link": "https://www.addinmobiliario.cl/",
					"title": "AddInmobiliario",
					"target": "_blank"
				}
			]
		}
	],
	"app": {
		"appstore": {
			"logo": "https://d2jd36q67phkec.cloudfront.net/toctoc/img/logos/logo-appstore.png",
			"link": "https://toctoc.app.link/app-toctoc",
			"alt": "App Store"
		},
		"googleplay": {
			"logo": "https://d2jd36q67phkec.cloudfront.net/toctoc/img/logos/logo-googleplay.png",
			"link": "https://toctoc.app.link/app-toctoc",
			"alt": "Google Play"
		}
	},
	"selloCCS": {
		"logo": "https://d2jd36q67phkec.cloudfront.net/toctoc/img/logos/sello-ccs.png",
		"link": "https://www.ecommerceccs.cl/sello-confianza-ecommerce-ccs/",
		"alt": "Logo CCS"
	},
	"contacto": {
		"link": "mailto:servicioalcliente@toctoc.com",
		"text": "servicioalcliente@toctoc.com"
	}
};

export default {
	title: 'TocToc-DS/Templates',
	component: Footer
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Footer_TT = Template.bind({});
Footer_TT.args = {
	footerOptions: footerOptions,
	claseAux:""
};

export const Footer_Simple_TT = Template.bind({});
Footer_Simple_TT.args = {
	footerOptions: false,
	claseAux:""
};

