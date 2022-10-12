import React from 'react';
import { useArgs } from '@storybook/client-api';

import Modal from './Modal';
import ModalContent from './ModalContent';
import ModalActions from './ModalActions';
import ModalTitle from './ModalTitle';
import { Button } from '../../atoms';
import { iProps } from './iProps';

export default {
	title: 'TocToc-DS/Molecules/Modal',
	component: Modal,
	args: {
		open: true,
	}
} 

export const Modal_Simple_TT = (args:iProps) => {
	const [{ open }, updateArgs] = useArgs();
	const handleClose = () => updateArgs({ open: !open });

	return (
		<>
			<Button variant="contained" handlerFn={handleClose}>Abre modal 😃</Button>
			<Modal {...args} >
				<ModalContent>
					<p>Modal simple, sin título.</p>
				</ModalContent>
				<ModalActions>
					<Button variant="outlined" handlerFn={handleClose}>Cerrar</Button>
				</ModalActions>
			</Modal>
		</>
	)
};

Modal_Simple_TT.args = {
	handleClose: (e: any) => function () { console.log(e) },
	claseAux: "clase-auxiliar",
	fullScreen: false,
	fullWidth: false,
	maxWidth: 'sm',
};




export const Modal_TT = (args:iProps) => {
	const [{ open }, updateArgs] = useArgs();
	const handleClose = () => updateArgs({ open: !open });

	return (
		<>
			<Button variant="contained" handlerFn={handleClose}>Abre modal 😃</Button>
			<Modal {...args} >
				<ModalTitle>Este es el título</ModalTitle>
				<ModalContent>
					<p>Contenido del modal. Este es un texto extenso para probar las opciones de scroll.</p>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quia sit saepe iste sunt eum esse ex quaerat voluptatibus. Voluptatibus culpa nobis saepe, velit cumque unde sapiente debitis cupiditate libero</p>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quia sit saepe iste sunt eum esse ex quaerat voluptatibus. Voluptatibus culpa nobis saepe, velit cumque unde sapiente debitis cupiditate libero</p>
				</ModalContent>
				<ModalActions>
					<Button handlerFn={handleClose}>Cancelar</Button>
					<Button variant="contained" handlerFn={handleClose}>Activar</Button>
				</ModalActions>
			</Modal>
		</>
	)
};

Modal_TT.args = {
	handleClose: (e: any) => function () { console.log(e) },
	claseAux: "clase-auxiliar",
	fullScreen: false,
	fullWidth: false,
	maxWidth: 'sm',
};