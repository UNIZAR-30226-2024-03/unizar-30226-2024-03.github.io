export interface Etiqueta {
    idEtiqueta: number;
    nombre: string;
}


export interface Audio {
    idAudio: number;
    titulo: string;
    path: string;
    duracionSeg: number;
    fechaLanz: string;
    esAlbum: boolean;
    imgAudio: string;
    esPrivado: boolean;
    esPodcast: boolean;
    artistas?: [{idUsuario: number, nombreUsuario: string}];
    etiquetas?: Etiqueta[]; 
    vecesEscuchada: number; 
}