import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import IconButton from './IconButton';
import DownloadIcon from './DownloadIcon';

export default {
    title: 'TocToc-DS/Atoms',
    component: IconButton,
    argTypes: {
        size: {
            control: {
                type: 'inline-radio',
                options: ['small', 'medium'],
            },
        },
    }
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

export const IconButtonTT = Template.bind({});

IconButtonTT.args = {
    children: <DownloadIcon />,
    iconAriaLabel: 'download',
    href: '',
    size: 'medium',
};