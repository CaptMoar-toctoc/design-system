import { ReactNode } from "react";
export interface iProps {
    label?: string;
    type: string;
    disabled?: boolean;
    defaultValue?: any;
    error?: boolean;
    fullWidth?: boolean;
    helperText?: ReactNode;
    size?: any;
    value?: any;
    name: string;
    onChange?: any;
    customStyleObject?: object;
}
