import { ReactNode } from "react";
export interface iProps {
	text: Array<string>,
	children?: ReactNode,
	handlerFn?: any,
	disabled?: boolean,
	href: string,
	ariaLabel: string
}