import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Checkbox from './Checkbox';

export default {
	title: 'TocToc-DS/Atoms',
	component: Checkbox,
	argTypes: {
		checked:{control: 'boolean'}
	},
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const CheckboxTT = Template.bind({});
CheckboxTT.args = {
	texto: 'Mi checkbox',
	disabled: false,	
	defaultChecked: false,
	handlerFn: () => { console.log(`click`) },
	customStyleObject: {},
};
