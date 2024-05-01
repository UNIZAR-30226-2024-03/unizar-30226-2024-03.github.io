import { Global } from "@/globalState/globalUrl.js";
import axios from 'axios';

async function uploadImg( image:any , token?:any) {
    try {
        //console.log(image)
        let formData = new FormData();
        formData.append("image", image);
        const response = await axios.post(Global.url + "foto/", formData, {
            headers: {
                "Content-Type": "multipart/form-data",    
                'Authorization': `Bearer ${token}`  
            }
            });
        return response.data;
    } catch (error) {
        console.error("Error registering user:", error);
        throw error;
    }
}

export { uploadImg };
