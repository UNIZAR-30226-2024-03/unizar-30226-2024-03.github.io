import { Global } from "@/globalState/globalUrl.js";
import axios from 'axios';

async function getStatsAudio( token: any, id:string, data: { date: any}) {
    try {
        axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
        const response = await axios.post(Global.url + "audio/stats/" + id, data);
        return response;
    } catch (error) {
        console.error("Error registering user:", error);
        throw error;
    }
}

export { getStatsAudio };
