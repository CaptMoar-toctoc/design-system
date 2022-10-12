import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Checkbox } from '../../atoms';
import CardAdmin from './CardAdmin';

export default {
	title: 'TocToc-DS/Molecules',
	component: CardAdmin,
	argTypes: {
		propertyType: {
			control: {
				type: 'inline-radio',
				options: ['Casa', 'Departamento', 'Oficina','Terreno'],
			},
		},
		operationType:{
			control: {
				type: 'inline-radio',
				options: ['Venta nuevo', 'Venta usado', 'Arriendo'],
			},
		},
		imgUrl:{
			control: {
				type: 'select',
				options: [					
					'https://d1cfu8v5n1wsm.cloudfront.net/toctoc/fotos/20200915/1560500/n_wm_2020112414389333609.jpg',
					'https://d1cfu8v5n1wsm.cloudfront.net/toctoc/fotos/20191230/1388918/n_wm_2021010740074046033.jpg',
					'https://d1cfu8v5n1wsm.cloudfront.net/toctoc/fotos/20200915/1560500/n_wm_2020112414412614859.jpg',
					'https://d1cfu8v5n1wsm.cloudfront.net/toctoc/fotos/20211217/1897212/n_wm_2022070402394590351.jpg',
				],
			}
		}
		// XXX: {
		// 	table: {
		// 		disable: true, //escondemos el control ya que se pintan todos los colores
		// 	},
		// },
		
	}

} as ComponentMeta<typeof CardAdmin>;

const Template: ComponentStory<typeof CardAdmin> = (args) => <CardAdmin {...args} />;

export const CardAdminTT = Template.bind({});
CardAdminTT.args = {
	publicada: true,
	destacada: false,
	labelCard: { text: 'Destacada u otro texto', color: '#3200C1', bg: '#37FFDB' },
	cardTitle: 'Moller Carlos Alvarado 6184',
	programa: {
		room: '2 a 3',
		bath: '1 a 2',
		mts: '205,6 a 250 m²',
	},
	precio:{
		desde: '7.570',
		hasta: '9.570',
		simboloMoneda: 'UF'
	},
	clickDelete: () => { console.log('Eliminado'); },
	commune: 'Pedro Aguirre Cerda',
	propertyType: 'Departamento',
	operationType: 'Venta nuevo',
	operationColor: '#3200C1',
	imgUrl: 'https://d1cfu8v5n1wsm.cloudfront.net/toctoc/fotos/20211217/1897212/n_wm_2022070402394590351.jpg',
	lnk: {
		url: 'https://www.toctoc.com/',
		target: '_blank'
	},
	selectCard: <Checkbox handlerFn={ () => { console.log('Checked!') } } />
};

