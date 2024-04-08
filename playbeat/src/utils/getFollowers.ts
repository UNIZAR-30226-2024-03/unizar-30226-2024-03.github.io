
import { Global } from "@/globalState/globalUrl.js";

import axios from 'axios';

async function getFollowers(jws: string) {
    try {

        const response = await axios.get(Global.url + "usuario?rrss=True",{
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
