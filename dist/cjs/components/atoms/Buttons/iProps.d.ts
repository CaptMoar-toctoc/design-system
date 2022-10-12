import { ReactNode } from "react";
export interface iProps {
    children?: ReactNode;
    handlerFn: any;
    href?: string;
    texto: string;
    disabled?: boolean;
    variant?: any;
    size?: any;
    customStyleObject?: object;
    widthBoolean?: boolean;
    color?: any;
}
