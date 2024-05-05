import { Global } from "@/globalState/globalUrl.js";
import axios from 'axios';

async function addArtistToAudio(nombreUsuario: any, token: any) {

    try {
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        const response = await axios.get(Global.url + "usuario/idUsuario/" + nombreUsuario);
        
        return response;
    } catch (error) {
        console.error("Error registering user:", error);
        throw error;
    }
}

export { addArtistToAudio };
