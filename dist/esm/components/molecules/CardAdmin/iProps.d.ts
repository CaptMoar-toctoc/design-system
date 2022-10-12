import { ReactNode } from "react";
export interface iProps {
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
export interface programaProps {
    room: string;
    bath: string;
    mts: string;
}
export interface labelCardProps {
    text?: string;
    color?: string;
    bg?: string;
}
export interface precioProps {
    desde: string;
    hasta?: string;
    simboloMoneda: string;
}
export interface linkProps {
    url: string;
    target?: string;
}
