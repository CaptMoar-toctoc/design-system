import { ReactNode } from "react";

export interface iProps {
    //children?: ReactNode;
	label: string,
	name: string,
	value?: any,
	options: any,
    handlerFn?: any;
    disabled?: boolean,
	defaultValue?: any,
	error?:boolean,
	helperText?: ReactNode
}