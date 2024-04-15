
import { Global } from "@/globalState/globalUrl.js";

import axios from 'axios';

async function getFollowers(jws: string, id?: string) {
    try {
        if(!id) {
            const response = await axios.get(Global.url + 'usuario?rrss=True', {
                headers: {
                    Authorization: `Bearer ${jws}`,
                },
            });
            console.log("User data:", response.data, Global.url + 'usuario?rrss=True');
            return response;
        }
        const response = await axios.get(Global.url + `usuario?idUsuario=${id}&rrss=True`,{
            headers: {
                Authorization: `Bearer ${jws}`,
            },
        });

        return response;

        
    } catch (error) {
        console.error("Error geting user data:", error);
        throw error;
    }
}

export { getFollowers };
