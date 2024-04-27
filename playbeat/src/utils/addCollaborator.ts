import { Global } from "@/globalState/globalUrl.js";
import axios from 'axios';

async function addCollaborator(idLista: any, idUsuario: any) {

    try {

        const response = await axios.post(Global.url + "lista/collaborator/"+idLista+"/"+idUsuario);
        //console.log(response)
        return response;
    } catch (error) {
        console.error("Error registering user:", error);
        throw error;
    }
}

export { addCollaborator };
