import { Global } from "@/globalState/globalUrl.js";
import axios from 'axios';

async function getEtiquetaPodcast(token: any) {
    try {
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        const response = await axios.get(Global.url + "etiquetas/podcast/");
        //console.log(response);
        return response;
    } catch (error) {
        console.error("Error registering user:", error);
        throw error;
    }
}

export { getEtiquetaPodcast };
