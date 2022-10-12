import { ReactNode } from "react";
export interface iProps {
	open: boolean,
	claseAux?: string,
	handleClose: any,
	fullScreen?: boolean,
	fullWidth?: boolean,
	maxWidth?: string,
	scroll?: 'body'	| 'paper',
	children: ReactNode
}
export interface iDialogContentProps{
	dividers?: boolean
	children: ReactNode
}
export interface iModalActionsProps{
	disableSpacing?: boolean
	children: ReactNode
}
export interface iModalTitleProps{
	disableSpacing?: boolean
	children: ReactNode
}
