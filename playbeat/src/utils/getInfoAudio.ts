import { Global } from "@/globalState/globalUrl.js";

import axios from 'axios';

async function getInfoAudio(jws: string, id:string) {
    try {;
        const response = await axios.get(Global.url + "audio/"+id,{
            headers: {
                Authorization: `Bearer ${jws}`,
            },

        });
        return response.data;
    } catch (error) {
        console.error("Error geting user data:", error);
        throw error;
    }
}

export { getInfoAudio };