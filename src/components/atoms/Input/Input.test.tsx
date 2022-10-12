import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';


import Input from "./Input";

describe('Input Testing Render', () => {
	const props = {
		label: 'Holaaaa',
		type: 'number',
		error: false,
		fullWidth: true,
		helperText: 'texto ayuda input',
		size: 'medium',
		value: 'valor input',
		name: 'nameInput',
		onChange: () => {  },

	}

	test("Render SnapShot", () => {
		expect(render(<Input {...props} />)).toMatchSnapshot();
	})

	test("Validar que sea input text", () => {
		const { container } = render(<Input {...props} />);
		const foo = container.querySelector(`[type="${props.type}"]`) as HTMLInputElement;
		expect(foo?.type).toBe(props.type);
	})
})

