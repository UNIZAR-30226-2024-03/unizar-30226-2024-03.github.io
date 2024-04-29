import { Global } from "@/globalState/globalUrl.js";
import axios from 'axios';

/**
 * Registra un nuevo usuario enviando una solicitud POST en el servidor.
 * 
 * @param {object} data - Los datos del usuario a registrar.
 * @param {any} data.nombreUsuario - El nombre de usuario del nuevo usuario.
 * @param {any} data.email - El correo electrónico del nuevo usuario.
 * @param {any} data.contrasegna - La contraseña del nuevo usuario.
 * @returns {Promise<object>} - Una promesa que se resuelve con el objeto de respuesta de la solicitud.
 * @throws {Error} - Si la solicitud de registro no se puede completar correctamente.
 */
async function registerUser(data: { nombreUsuario: any; email: any; contrasegna: any; }) {
  try {

    const response = await axios.post(Global.url + "auth/signup", data);

    return response;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
}

export { registerUser };
