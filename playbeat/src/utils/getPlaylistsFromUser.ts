import { Global } from "@/globalState/globalUrl.js";
import axios from 'axios';
import { getMyUserInfo } from "./getMyUserInfo";

async function getPlaylistsFromUser( id: any, token: any) {
    try {
        if(id == -1){
            const user = await getMyUserInfo(token);
            id = user.data.usuario.idUsuario;
        }
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}

        const response = await axios.get(Global.url + "lista/owned/" + id);
        return response;
    } catch (error) {
        console.error("Error registering user:", error);
        throw error;
    }
}

export { getPlaylistsFromUser };
