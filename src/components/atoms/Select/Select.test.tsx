import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';


import Select from "./Select";

describe('Input Testing Render', () => {
	//inicializacion de props componente
	//aca van todos los props requerido y OPCIONALES clea
	const props = {
		label: 'Holaaaa',
		name: 'NameSelect',
		defaultValue:"1",
		options: [
			{ label: "La Florida", value: "1" },
			{ label: "Las Condes", value: "2" },
			{ label: "Peñalolén", value: "3" }
		]
	}

	test("Render SnapShot", () => {
		expect(render(<Select {...props} />)).toMatchSnapshot();
	})


})

