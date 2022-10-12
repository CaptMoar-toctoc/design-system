export interface iProps {
    listaOperaciones?: Array<iMenuFirstOptions>;
}
export interface iMenuFirstOptions {
    tipo: number;
    etiqueta: string;
    tieneSubmenu: boolean;
    url: string;
}
