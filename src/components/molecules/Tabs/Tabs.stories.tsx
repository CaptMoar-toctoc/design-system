import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Tabs from './Tabs';


export default {
    title: 'TocToc-DS/Molecules',
    component: Tabs,
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const TabsTT = Template.bind({});

TabsTT.args = {
    index: 1,
    tabs: [{
        text: 'Proyectos nuevos en venta',
        handlerFn: () => { },
    },

    {
        text: 'Propiedades usadas en venta',
        handlerFn: () => { }
    },
    {
        text: 'Propiedades usadas en arriendo',
        handlerFn: () => { }
    }
    ]
};