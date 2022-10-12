import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';


import Skeleton from "./Skeleton";

describe('Skeleton Testing Render', () => {
	const initProps = {
		width: '200px',
		height: '100px',
		component: 'div'
	}

	test("Render SnapShot", () => {
		expect(render(<Skeleton {...initProps} />)).toMatchSnapshot();
	})

	test(`Que exista elemento con clase MuiSkeleton-rootz`, () => {
		const {container} = render(<Skeleton {...initProps} />);
		const elem = container.getElementsByClassName('MuiSkeleton-root');
		expect(elem.length).toBe(1);
	})

	test(`Que renderize un ${initProps.component}`, () => {
		const {container} = render(<Skeleton {...initProps} />);

		const elem = container.getElementsByTagName(initProps.component);

		expect(elem.length).toBe(1);
	})

})

