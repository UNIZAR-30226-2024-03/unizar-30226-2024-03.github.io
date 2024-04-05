import { Global } from "@/globalState/globalUrl.js";
import axios from 'axios';

async function loginUser(data: { email: any; contrasegna: any; }) {
    try {
        const response = await axios.post(Global.url + "auth/login", data);

        return response;
    } catch (error) {
        console.error("Error registering user:", error);
        throw error;
    }
}

export { loginUser };
