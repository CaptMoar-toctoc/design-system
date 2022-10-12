import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Select from './Select';

export default {
	title: 'TocToc-DS/Atoms',
	component: Select,
	// argTypes: {
	// 	checked:{control: 'boolean'}
	// },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const SelectTT = Template.bind({});


SelectTT.args = {
	label:"Mi select",
	name:"miSelect",
	disabled: false,
	defaultValue: "",
	error: false,
	handlerFn: () => { console.log(`click`) },
	options: [
		{ label: "La Florida", value: "1" },
		{ label: "Las Condes", value: "2" },
		{ label: "Peñalolén", value: "3" },
	]
};
SelectTT.decorators = [
	(Story) => (
		<div style={{ maxWidth: '30%' }}>
			<Story />
		</div>
	),
];
