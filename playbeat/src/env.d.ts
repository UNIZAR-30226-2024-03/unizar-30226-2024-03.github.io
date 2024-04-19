/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare namespace App {
    interface Locals {
      usuario: {
        idUsuario: number,
        email: string,
        nombreUsuario: string,
        esAdmin: boolean,
        imgPerfil: string,
        idUltimoAudio: null,
        segFinAudio: null ,
        Seguidores:[],
        Seguidos:[],
      }
    }
  }