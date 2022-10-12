import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from './Input';

export default {
	title: 'TocToc-DS/Atoms',
	component: Input,
	argTypes: {
		//checked:{control: 'boolean'}
		size: {
			control: {
				type: 'inline-radio',
				options: ['small', 'medium'],
			},
		},
	},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const InputTT = Template.bind({});


InputTT.args = {
	label: "Ingresa un dato",
	disabled: false,
	type: "text",
	defaultValue: "",
	error: false,
	fullWidth: false,
	helperText: "Texto de ayuda para este campo.",
	size: "medium",
	name:"nombreInput",
	onChange: () => { console.log(`onChange input`) },
	customStyleObject: {},
	value: "",
};
InputTT.decorators = [
	(Story) => (
		<div style={{ maxWidth: '30%' }}>
			<Story />
		</div>
	),
];
