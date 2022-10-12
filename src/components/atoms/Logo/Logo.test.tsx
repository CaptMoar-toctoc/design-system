import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

import Logo from "./Logo";

describe('Logo Testing Render', () => {
	//inicializacion de props componente
	//aca van todos los props requerido y OPCIONALES clea
	const props = {
		width: "106",
		dark: true,
		orientation: 'v'
	}

	test("Render SnapShot", () => {
		expect(render(<Logo {...props} />)).toMatchSnapshot();
	})

	test("Validar ancho", () => {
		const { container } = render(<Logo {...props} />);
		const elem = container.querySelector('img');
		expect(elem?.width).toBe(Number(props.width));
	})

	test("Validar alto", () => {
		const { container } = render(<Logo {...props} />);
		const elem = container.querySelector('img');
		expect(elem?.height).toBe( (Number(props.width) * 57) / (Number(props.width) ) );
	})

	test("Validar imagen ", () => {
		const { container } = render(<Logo {...props} />);
		const elem = container.querySelector('img');
		expect(elem?.src).toBe( 'https://d2jd36q67phkec.cloudfront.net/toctoc/img/logos/brand/logo-tt-v-blanco.svg' );
	})
})