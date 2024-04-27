import { Global } from "@/globalState/globalUrl.js";
import axios from 'axios';


async function getStatsUser( token: any, data: { date: any}) {
    try {
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        const response = await axios.post(Global.url + "usuario/historico", data);
        return response;
    } catch (error) {
        console.error("Error registering user:", error);
        throw error;
    }
}

export { getStatsUser };
