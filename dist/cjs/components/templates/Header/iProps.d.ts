export interface iProps {
    headerOptions?: Array<iHeaderOptions>;
    isMobile: boolean;
}
export interface iHeaderOptions {
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
export interface iImg {
    dispositivo: string;
    src: string;
    alt?: string;
    url?: string;
}
export interface iMobile {
    visible: boolean;
    posicion: string;
}
