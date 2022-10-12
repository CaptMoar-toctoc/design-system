import IconButton from './IconButton';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DownloadIcon from './DownloadIcon';

describe("IconButton testing", () => {
    const initProps = {
        children: <DownloadIcon />,
        handlerFn: () => { },
        iconAriaLabel: 'icon-button'
    };

    test('Render IconButton component', () => {
        render(<IconButton {...initProps} />)
    })

    test("Render SnapShot", () => {
        expect(render(<IconButton {...initProps} />)).toMatchSnapshot();
    })

    test.todo("Is a clickable component"), () => {
        render(<IconButton {...initProps} />)
        const iconButton = screen.getByRole('button')
        fireEvent.click(iconButton)
        expect(iconButton).toBeTruthy();
    }
})

export { }