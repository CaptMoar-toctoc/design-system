import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import RadioGroup from './RadioGroup';
import RadioItem from './RadioItem';


const OpsTest = () => {
	return <>
		{['Opción 1', 'Opción 2', 'Otra opción', 'Op'].map(
			(x, index) => <RadioItem
				id={`id${index}`}
				name={x} label={x}
				value={index}
				required={true}
				size={'small'}
				key={`k${index}`}
			/>
		)}
	</>
}

export default {
	title: 'TocToc-DS/Atoms/RadioButtons',
	component: RadioGroup,
	// argTypes: {
	// 	checked:{control: 'boolean'}
	// },
} as ComponentMeta<typeof RadioGroup>;

const Template: ComponentStory<typeof RadioGroup> = (args) => <RadioGroup {...args} />

export const RadioGroupTT = Template.bind({});
RadioGroupTT.args = {
	name: 'miRadio',
	defaultValue: "",
	onChange: () => { console.log(`click`) },
	children: <OpsTest />
};
