import { ComponentStory, ComponentMeta } from '@storybook/react';

import MenuFirstLevel from './MenuFirstLevel';
const listaOperaciones = [
    {
        "tipo": 1,
        "etiqueta": "Comprar",
        "tieneSubmenu": true,
        "url": "#comprar"
    },
    {
        "tipo": 2,
        "etiqueta": "Arrendar",
        "tieneSubmenu": true,
        "url": "#arrendar"
    },
    {
        "tipo": 3,
        "etiqueta": "Tasar",
        "tieneSubmenu": false,
        "url": "https://www.toctoc.com/retasalo?o=menu"
    },
    {
        "tipo": 4,
        "etiqueta": "Financiamiento",
        "tieneSubmenu": false,
        "url": "https://www.toctoc.com/financiamiento?o=menu"
    }
]

export default {
    title: 'TocToc-DS/Templates',
    component: MenuFirstLevel
} as ComponentMeta<typeof MenuFirstLevel>;

const Template: ComponentStory<typeof MenuFirstLevel> = (args) => <MenuFirstLevel {...args} />;

export const Menu_TT = Template.bind({});

Menu_TT.args = {
    listaOperaciones: listaOperaciones,
};
Menu_TT.decorators = [
    (Story) => (
        <Story />
    ),
];
