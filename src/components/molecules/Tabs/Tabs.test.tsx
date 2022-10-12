import Tabs from './Tabs';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';


describe("Tabs testing", () => {
    const initProps = {
        tabs: [{
            text: 'Proyectos nuevos en venta',
            handlerFn: () => { }
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
    }

    test("Render Tabs component", () => {
        render(<Tabs {...initProps} />)
    })

    test("Render SnapShot", () => {
        expect(render(<Tabs {...initProps} />)).toMatchSnapshot();
    })

    test.todo("It has a rendered text"), () => {
        render(<Tabs {...initProps} />);
        const text = screen.queryByText('Proyectos')
        expect(text).not.toBeNull();
    }

    test.todo("Is a clickable component"), () => {
        render(<Tabs {...initProps} />)
        const Tab = screen.getByRole('option')
        fireEvent.click(Tab)
        expect(Tab).toBeTruthy();
    }
})

describe('Tabs Testing renders with empty props', () => {

    const initProps = {
        tabs: [
        ]
    };

    test('Render Tabs component with empty props', () => {
        render(<Tabs {...initProps} />)
        expect(<Tabs {...initProps} />).toBeTruthy();
    })
})

export { }