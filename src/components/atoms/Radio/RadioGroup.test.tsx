import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

import RadioGroup from "./RadioGroup";

describe('RadioGroup Testing Render', () => {
	//inicializacion de props componente
	//aca van todos los props requerido y OPCIONALES clea
	const props = {
		value: 'valor RadioGroup',
		name: 'RadioGroup',
		onChange: () => { },
	}

	test("Render SnapShot", () => {
		expect(render(<RadioGroup {...props} />)).toMatchSnapshot();
	})


})

