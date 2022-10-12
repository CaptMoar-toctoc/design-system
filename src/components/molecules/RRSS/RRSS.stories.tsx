import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import RRSS from './RRSS';

export default {
	title: 'TocToc-DS/Molecules',
	component: RRSS,
	argTypes: {
		sizeIcon: {
			control: {
				type: 'inline-radio',
				options: [16, 24, 32, 40],
			},
		},

	},
} as ComponentMeta<typeof RRSS>;

const Template: ComponentStory<typeof RRSS> = (args) => <RRSS {...args} />;

export const RRSS_TT = Template.bind({});


RRSS_TT.args = {
	clase: "",
	color: "#888",
	sizeIcon: 16
};
