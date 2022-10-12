import ButtonGroup from './ButtonGroup';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';


describe("ButtonGroup testing", () => {

    test("Render ButtonGroup component", () => {
        render(<ButtonGroup />)
    })

    test("Render SnapShot", () => {
        expect(render(<ButtonGroup />)).toMatchSnapshot();
    })

    test.todo("It has a rendered text"), () => {
        render(<ButtonGroup />);
        const text = screen.queryByText('Proyectos')
        expect(text).not.toBeNull();
    }

    test.todo("Is a clickable component"), () => {
        render(<ButtonGroup />)
        const buttonGroup = screen.getByRole('button')
        fireEvent.click(buttonGroup)
        expect(buttonGroup).toBeTruthy();
    }
})

export { }