import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';


import Pagination from "./Pagination";

describe('Pagination Testing Render', () => {
	//inicializacion de props componente
	//aca van todos los props requerido y OPCIONALES clea
	const props = {
		count: 10,
		defaultPage: 3,
		showFirstLastButton: false
	}

	test("Render SnapShot", () => {
		expect(render(<Pagination {...props} />)).toMatchSnapshot();
	})

	test("Validar default page igual a "+props.defaultPage, () => {
		render(<Pagination {...props} />);
		const { container } = render(<Pagination {...props} />);
		const elem = container.querySelector(`ul li:nth-child(${props.defaultPage}) button`);
		expect(Number(elem!.textContent) +1).toBe( props.defaultPage );
		
	})
	test(`Que exista una página ${props.count}`, () => {
		render(<Pagination {...props} />);
		expect(screen.getByText(props.count)).toBeInTheDocument();
	})

})

