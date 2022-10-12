import { ComponentStory, ComponentMeta } from '@storybook/react';

import Header from './Header';
const headerOptions =[
	{
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
	},
	{
		"id": 2,
		"class": "",
		"tipo": "enlace-simple",
		"texto": "Personas",
		"url": "https://toctoc.com/?o=menuprincipal",
		"posicion": "izquierda",
		"icono": null,
		"navegable": false,
		"target": "",
		"mobile": {
			"visible": true,
			"posicion": "inferior"
		}
	},
	{
		"id": 3,
		"class": "",
		"tipo": "enlace-simple",
		"texto": "Empresas",
		"url": "https://toctoc.com/empresas?o=menuprincipal",
		"posicion": "izquierda",
		"icono": null,
		"navegable": false,
		"target": "",
		"mobile": {
			"visible": true,
			"posicion": "inferior"
		}
	},
	{
		"id": 4,
		"class": "",
		"tipo": "enlace-simple",
		"texto": "Ayuda",
		"url": "https://ayuda.toctoc.com/hc/es-419?o=menuprincipal",
		"posicion": "derecha",
		"icono": "help",
		"navegable": false,
		"target": "_blank",
		"mobile": {
			"visible": false,
			"posicion": "inferior"
		}
	},
	{
		"id": 5,
		"class": "",
		"tipo": "enlace-simple",
		"texto": "Ingresar",
		"posicion": "derecha",
		"icono": "user-circle",
		"navegable": true,
		"target": "",
		"mobile": {
			"visible": false,
			"posicion": "inferior"
		}
	},
	{
		"id": 6,
		"class": "btnPublicar",
		"tipo": "enlace-simple",
		"texto": "Publicar",
		"url": "https://toctoc.com/Publicar?o=menuprincipal",
		"posicion": "derecha",
		"icono": null,
		"navegable": false,
		"target": "",
		"mobile": {
			"visible": true,
			"posicion": "superior"
		}
	}
]
export default {
	title: 'TocToc-DS/Templates',
	component: Header
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Header_TT = Template.bind({});

Header_TT.args = {
	headerOptions,
	isMobile:false
};
Header_TT.decorators = [
	(Story) => (
		<div style={{ maxWidth: '100%' }}>
			<Story />
		</div>
	),
];
