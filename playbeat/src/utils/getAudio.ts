import { Global } from "@/globalState/globalUrl.js";

import axios from 'axios';

async function getAudio(jws: string, id:string) {
    try {;
        const response = await axios.get(Global.url + "audio/play/"+id,{
            headers: {
                Authorization: `Bearer ${jws}`,
            },
            responseType: 'blob' // Aquí es donde configuras la responseType a 'blob'

        });

        return response.data;
    } catch (error) {
        console.error("Error geting user data:", error);
        throw error;
    }
}

export { getAudio };