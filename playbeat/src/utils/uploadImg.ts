import { Global } from "@/globalState/globalUrl.js";
import axios from 'axios';


/**
 * Función para subir una imagen al servidor.
 * Utiliza una solicitud POST con datos de formulario para enviar la imagen al servidor.
 *
 * @param {any} image - La imagen que se va a subir al servidor. Puede ser un archivo de imagen u otro tipo de objeto de imagen.
 *
 * @returns {Promise<Object>} - Devuelve una promesa que resuelve con los datos de la respuesta de la solicitud POST si se realiza con éxito.
 * 
 * @throws {Error} - Lanza un error si ocurre algún problema durante la solicitud.
 *
 * Crea un objeto `FormData` y agrega la imagen a él con la clave "image".
 * Realiza la solicitud POST a la URL `Global.url + "foto/"` con los datos de formulario.
 * Configura el encabezado `Content-Type` a "multipart/form-data".
 * Si la solicitud se completa con éxito, devuelve los datos de la respuesta de la solicitud.
 * En caso de error, muestra un mensaje de error en la consola y lanza el error.
 */
async function uploadImg( image:any , token?:any) {

    try {
        let headers: { [key: string]: string } = {
            "Content-Type": "multipart/form-data"
        };

        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }
        //console.log(image)
        let formData = new FormData();
        formData.append("image", image);
        const response = await axios.post(Global.url + "foto/", formData, {headers});
        return response.data;
    } catch (error) {
        console.error("Error registering user:", error);
        throw error;
    }
}

export { uploadImg };
