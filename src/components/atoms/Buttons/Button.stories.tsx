import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';
import { iProps } from './iProps';

const misColores = ['primary', 'secondary', 'success', 'error', 'info', 'warning', 'inherit'];

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'TocToc-DS/Atoms',
	component: Button,
	argTypes: {
		variant: {
			control: {
				type: 'inline-radio',
				options: ['contained', 'outlined', 'text'],
			},
		},
		size: {
			control: {
				type: 'inline-radio',
				options: ['small', 'medium', 'large'],
			},
		},
		color: {
			table: {
				disable: true, //escondemos el control ya que se pintan todos los colores
			},
		},
		
	},
} //as ComponentMeta<typeof Button>;

// const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
// export const ButtonTT = Template.bind({});
//export const ButtonTT = (args:iProps) => <Button {...args} />;

export const ButtonsTT = (args: iProps) => {
	return (
		misColores.map(x =>
			<div key={x} className="c-element" style={{ width: '20%' }}>
				<Button {...args} color={x} texto={args.texto ? args.texto : (x[0].toUpperCase() + x.substring(1))} />
			</div>)
	)
};

ButtonsTT.args = {
	variant: 'contained',
	texto: `Enviar`,
	href:"",
	size: 'medium',
	disabled: false,
	widthBoolean: false,
	customStyleObject: {},
	handlerFn: () => { console.log(`click`) },
};