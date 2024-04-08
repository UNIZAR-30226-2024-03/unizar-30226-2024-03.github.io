import { Global } from "@/globalState/globalUrl.js";
import axios from 'axios';

async function getImg(image:any) {
    try {
        console.log(image)
        let formData = new FormData();
        formData.append("image", image);
        const response = await axios.get(Global.url + "foto/"+ image);
        //console.log(response)
        return response.data;
    } catch (error) {
        console.error("Error registering user:", error);
        throw error;
    }
}

export { getImg };
