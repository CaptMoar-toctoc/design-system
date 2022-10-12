export interface iProps {
    claseAux?: string;
    anchoAlto?: {
        width: number;
        height: number;
    };
    urlBase?: string;
    origenFooter?: string;
    [menu: string]: any;
}
export interface iDataState {
    app: iApp;
    menu: object;
    selloCCS: iSelloCCS;
    contacto: iContacto;
}
export interface iApp {
    appstore: iAppStore;
    googleplay: iGooglePlay;
}
export interface iAppStore {
    link: string;
    logo: string;
    alt: string;
}
export interface iGooglePlay {
    link: string;
    logo: string;
    alt: string;
}
export interface iSelloCCS {
    link: string;
    logo: string;
    alt: string;
}
export interface iContacto {
    link: string;
    text: string;
}
