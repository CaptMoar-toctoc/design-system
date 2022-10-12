import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

import Checkbox from "./Checkbox";

describe('Checkbox Testing Render', () => {
	//inicializacion de props componente
	//aca van todos los props requerido y OPCIONALES clea
	const props = {
		texto: 'heeeey',
		handlerFn: () => { },
		disabled: true,
		defaultChecked: true,
	}

	//esto crea una imagen del componente renderizado
	test("Render SnapShot", () => {
		expect(render(<Checkbox {...props} />)).toMatchSnapshot();
	})

	//Validar que el componente sea un checkbox
	test("Validar que sea checkbox", () => {
		render(<Checkbox {...props} />)
		expect(screen.getByRole('checkbox')).toBeInTheDocument();
	})

	//esto validara que el texto sea el mismo que el que le entregasmos en el objeto props
	test("Validar que el texto sea correcto", () => {
		render(<Checkbox {...props} />)
		expect(screen.getByText(props.texto)).toBeInTheDocument();
	})

	//este campo valida que el campo checkbox este deshabilitado
	test("Validar que el componente este deshabilitado", () => {
		render(<Checkbox {...props} />)
		expect(screen.getByRole('checkbox')).toBeDisabled();
	})

	// Esto valida que cuando el campo disable cambie en los props, este se active, por defecto en los props esta deshabilitado
	test("Validar que el componente este habilitado", () => {
		render(<Checkbox {...props} disabled={false}/>)
		expect(screen.getByRole('checkbox')).not.toBeDisabled();
	})

	// valida que el campo check este habilitado
	test("Validar que el checkbox este checkeado", () => {
		render(<Checkbox {...props} />)
		expect(screen.getByRole('checkbox')).toBeChecked();
	})

	// valida que el checkbox no este checkeado en caso de cambiar los props 
	test("Validar que el checkbox no este checkeado", () => {
		render(<Checkbox {...props} defaultChecked={false}/>)
		expect(screen.getByRole('checkbox')).not.toBeChecked();
	})

	//valida console log, no estoy muy seguro de esto pero algo asi deveria ser
	// test("Validar que el checkbox haga un console log hola", () => {
	// 	render(<Checkbox {...props} />)
	// 	screen.getByRole('checkbox').click()
	// })
})

