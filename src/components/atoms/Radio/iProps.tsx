import { ReactNode } from "react";

export interface iProps {
    children?: ReactNode,
	defaultValue?: any,
	name: string,
    onChange: any,
    value?: any,
}