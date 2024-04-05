import { Global } from "@/globalState/globalUrl.js";

import axios from 'axios';

async function userData(jws: string) {
    try {

        const response = await axios.get(Global.url + "usuario",{
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

export { userData };
