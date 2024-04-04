import { Global } from "@/globalState/globalUrl.js";
import axios from 'axios';

async function loginUser(data: { email: any; contrasegna: any; }) {
    try {
        console.log("Sending: ",data)
        const response = await axios.get(Global.url + "auth/login", {data});

        return response;
    } catch (error) {
        console.error("Error registering user:", error);
        throw error;
    }
}

export { loginUser };
