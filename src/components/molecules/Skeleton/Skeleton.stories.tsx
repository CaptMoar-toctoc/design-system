import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Skeleton from './Skeleton';

export default {
	title: 'TocToc-DS/Molecules',
	component: Skeleton,
	argTypes: {
		variant: {
			control: {
				type: 'inline-radio',
				options: ['circular','rectangular','rounded','text'],
			},
		},
	},
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Skeleton_TT = Template.bind({});


Skeleton_TT.args = {
	width: '300px',
	height: '50px',
	component:'div'
};
