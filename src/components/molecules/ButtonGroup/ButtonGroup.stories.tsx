import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ButtonGroup from './ButtonGroup';


export default {
    title: 'TocToc-DS/Molecules',
    component: ButtonGroup,
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = (args) => <ButtonGroup {...args} />;

export const ButtonGroupTT = Template.bind({});

ButtonGroupTT.args = {
    handlerFn: () => { console.log(`click`) },
};