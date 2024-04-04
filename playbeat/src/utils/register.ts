import { Global } from "@/globalState/globalUrl.js";
import axios from 'axios';

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
