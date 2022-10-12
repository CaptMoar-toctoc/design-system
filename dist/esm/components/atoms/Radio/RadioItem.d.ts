import { FC } from 'react';
interface iProps {
    label: string;
    checked?: boolean;
    disabled?: boolean;
    id: string;
    name: string;
    onChange?: any;
    required?: boolean;
    size?: any;
    value: any;
}
declare const RadioItem: FC<iProps>;
export default RadioItem;
