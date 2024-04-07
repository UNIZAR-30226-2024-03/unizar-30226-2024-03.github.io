import { Global } from "@/globalState/globalUrl.js";
import axios from 'axios';

async function getPlaylistsFromUser( token: any) {
    try {
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        const response = await axios.get(Global.url + "lista/owned/308");

        return response;
    } catch (error) {
        console.error("Error registering user:", error);
        throw error;
    }
}

export { getPlaylistsFromUser };
