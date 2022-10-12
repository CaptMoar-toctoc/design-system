/// <reference types="react" />
import { ReactNode, FC } from 'react';

interface iProps$g {
    name: string;
    className?: string;
    size?: number;
    color?: string;
}

declare const Icon: ({ name, color, size, className }: iProps$g) => JSX.Element;

interface iProps$f {
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

declare const Button: FC<iProps$f>;

interface iProps$e {
    id?: string;
    checked?: boolean;
    handlerFn?: any;
    texto?: string;
    disabled?: boolean;
    customStyleObject?: object;
    defaultChecked?: boolean;
    value?: any;
}

declare const Checkbox: FC<iProps$e>;

interface iProps$d {
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

declare const Input: FC<iProps$d>;

interface iProps$c {
    width?: string;
    height?: string;
    orientation?: 'h' | 'v' | string;
    dark?: boolean;
}

declare const Logo: FC<iProps$c>;

interface iProps$b {
    children?: ReactNode;
    defaultValue?: any;
    name: string;
    onChange: any;
    value?: any;
}

declare const RadioGroup: FC<iProps$b>;

interface iProps$a {
    label: string;
    name: string;
    value?: any;
    options: any;
    handlerFn?: any;
    disabled?: boolean;
    defaultValue?: any;
    error?: boolean;
    helperText?: ReactNode;
}

declare const Select: FC<iProps$a>;

interface iProps$9 {
    handlerFn?: any;
    disabled?: boolean;
    customStyleObject?: object;
    defaultValue: number;
}

declare const Slider: FC<iProps$9>;

interface iProps$8 {
    children?: ReactNode;
}

declare const Theme: FC<iProps$8>;

declare function ButtonGroup(): JSX.Element;

interface iProps$7 {
    cardTitle: string;
    programa: programaProps;
    precio: precioProps;
    clickDelete: Function;
    propertyType: string;
    operationType: string;
    operationColor?: string;
    commune: string;
    labelCard?: labelCardProps;
    imgUrl: string;
    publicada: boolean;
    destacada?: boolean;
    lnk: linkProps;
    hideActions?: boolean;
    selectCard?: ReactNode;
}
interface programaProps {
    room: string;
    bath: string;
    mts: string;
}
interface labelCardProps {
    text?: string;
    color?: string;
    bg?: string;
}
interface precioProps {
    desde: string;
    hasta?: string;
    simboloMoneda: string;
}
interface linkProps {
    url: string;
    target?: string;
}

declare const CardAdmin: FC<iProps$7>;

interface iProps$6 {
    count: number;
    defaultPage?: number;
    siblingCount?: number;
    showFirstLastButton?: boolean;
    handlePagination?: any;
}

declare const Pagination: FC<iProps$6>;

interface iProps$5 {
    clase?: string;
    color?: string;
    sizeIcon?: number;
}

declare const RRSS: FC<iProps$5>;

interface iProps$4 {
    open: boolean;
    claseAux?: string;
    handleClose: any;
    fullScreen?: boolean;
    fullWidth?: boolean;
    maxWidth?: string;
    scroll?: 'body' | 'paper';
    children: ReactNode;
}
interface iDialogContentProps {
    dividers?: boolean;
    children: ReactNode;
}
interface iModalActionsProps {
    disableSpacing?: boolean;
    children: ReactNode;
}
interface iModalTitleProps {
    disableSpacing?: boolean;
    children: ReactNode;
}

declare const Modal: FC<iProps$4>;

declare const ModalActions: FC<iModalActionsProps>;

declare const ModalContent: FC<iDialogContentProps>;

declare const ModalTitle: FC<iModalTitleProps>;

interface iProps$3 {
    variant?: 'circular' | 'rectangular' | 'rounded' | 'text';
    width?: number | string;
    height?: number | string;
    component?: string;
}

declare const Skeleton: FC<iProps$3>;

interface iProps$2 {
    claseAux?: string;
    anchoAlto?: {
        width: number;
        height: number;
    };
    urlBase?: string;
    origenFooter?: string;
    [menu: string]: any;
}

declare const Footer: FC<iProps$2>;

interface iProps$1 {
    headerOptions?: Array<iHeaderOptions>;
    isMobile: boolean;
}
interface iHeaderOptions {
    id: number;
    class: string;
    tipo: string;
    img?: Array<iImg>;
    texto?: string;
    url?: string;
    posicion?: string;
    icono: any;
    navegable: boolean;
    target: string;
    mobile: iMobile;
}
interface iImg {
    dispositivo: string;
    src: string;
    alt?: string;
    url?: string;
}
interface iMobile {
    visible: boolean;
    posicion: string;
}

declare const Header: FC<iProps$1>;

interface iProps {
    listaOperaciones?: Array<iMenuFirstOptions>;
}
interface iMenuFirstOptions {
    tipo: number;
    etiqueta: string;
    tieneSubmenu: boolean;
    url: string;
}

declare const MenuFirstLevel: FC<iProps>;

export { Button, ButtonGroup, CardAdmin, Checkbox, Footer, Header, Icon, Input, Logo, MenuFirstLevel, Modal, ModalActions, ModalContent, ModalTitle, Pagination, RRSS, RadioGroup, Select, Skeleton, Slider, Theme as ThemeTT };
