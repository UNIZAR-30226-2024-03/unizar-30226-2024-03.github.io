
import { Global } from "@/globalState/globalUrl.js";

import axios from 'axios';

async function editUser(jws: string) {
    try {

        const response = await axios.put(Global.url + "usuario",{
            headers: {
                Authorization: `Bearer ${jws}`,
            },
            data: {
                nombreUsuario: "Lucas",
            }
        });

        return response;
    } catch (error) {
        console.error("Error geting user data:", error);
        throw error;
    }
}

export { editUser };
