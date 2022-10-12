import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Pagination from './Pagination';

export default {
	title: 'TocToc-DS/Molecules',
	component: Pagination,
	argTypes: {
		showFirstButton: {
			table: {
				disable: true, 
			},
		},
		showLastButton: {
			table: {
				disable: true, 
			},
		},
		handlePagination: {
			table: {
				disable: true, 
			},
		},
	},
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => <Pagination {...args} />;

export const Pagination_TT = Template.bind({});


Pagination_TT.args = {
	count:10,
	defaultPage:3,
	showFirstLastButton: false,
	handlePagination: (e:any,value:number)=>{
		console.log(`Página ${value}`);
		console.log(e);
	}
};
