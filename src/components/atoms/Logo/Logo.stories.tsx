import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Logo from './Logo';

export default {
	title: 'TocToc-DS/Atoms',
	argTypes: {
		orientation: {
			control: {
				type: 'inline-radio',
				options: ['h', 'v'],
			},
			description: 'Por defecto h (horizontal), v (vertical)'
		}
	},

} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const LogoTT = Template.bind({});


LogoTT.args = {
	width: "170",
	height: "44",
	orientation: 'h',
	dark: false
};
LogoTT.decorators = [
	(Story) => (
		<div style={{ }}>
			<Story />
		</div>
	),
];
