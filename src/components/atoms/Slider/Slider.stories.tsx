import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Slider from './Slider';

export default {
	title: 'TocToc-DS/Atoms',
	component: Slider,
	// argTypes: {
	// 	checked:{control: 'boolean'}
	// },
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => <Slider {...args} /> ;

export const SliderTT = Template.bind({});


SliderTT.args = {
	disabled: false,
	defaultValue:50,
	handlerFn: () => { console.log(`click`) },
	customStyleObject: {},
};
SliderTT.decorators = [
	(Story) => (
	  <div style={{ maxWidth: '20%'}}>
		<Story />
	  </div>
	),
  ];
