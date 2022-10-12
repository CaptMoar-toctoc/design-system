import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from './Modal';
import ModalContent from './ModalContent';
import ModalActions from './ModalActions';
import ModalTitle from './ModalTitle';

const txtTest = "Contenido modal";

describe("Modal testing", () => {
	const initProps = {
		open: true,
		handleClose: (e: any) => function () { console.log(e) },
		claseAux: "clase-auxiliar",
		fullScreen: false,
		fullWidth: false,
		maxWidth: 'sm',
	};

	test('Render Modal component', () => {
		render(
			<Modal {...initProps} >
				<ModalContent>
					<p>{txtTest}</p>
				</ModalContent>
				<ModalActions>
					Button
				</ModalActions>
			</Modal>
		)
	})

	test("Render SnapShot", () => {
		expect(render(
			<Modal {...initProps} >
			<ModalContent>
				<p>{txtTest}</p>
			</ModalContent>
			<ModalActions>
				Button
			</ModalActions>
		</Modal>
			)).toMatchSnapshot();
	})

	test(`Que exista "${txtTest}"`, () => {
		render(<Modal {...initProps} >
			<ModalContent>
				<p>{txtTest}</p>
			</ModalContent>
			<ModalActions>
				Button
			</ModalActions>
		</Modal>);
		let esto = new RegExp(txtTest, 'i')
		expect(screen.getByText(esto)).toBeInTheDocument();
	})

})


export { }
