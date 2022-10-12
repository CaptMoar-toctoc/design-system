import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';


import Slider from "./Slider";

describe('Input Testing Render', () => {
	//inicializacion de props componente
	//aca van todos los props requerido y OPCIONALES clea
	const props = {
		defaultValue: 25
	}

	test("Render SnapShot", () => {
		expect(render(<Slider {...props} />)).toMatchSnapshot();
	})


})

