import { Global } from "@/globalState/globalUrl.js";
import axios from 'axios';

async function modAudio(data: {titulo?: string;esPrivada?: boolean,img?: string,esAlbum?: boolean,fechaLanz?: any,duracionSeg?: number,cancion?: any, esPodcast?:any}, token: any, id:string) {
    if(Object.keys(data).length !== 0){
        try {
            axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
            let formData = new FormData();
            Object.entries(data).forEach(([key, value]) => {
                formData.append(key, value);
            });
            console.log(formData)
            const response = await axios.put(Global.url + "audio/update/"+ id, formData ,  {        
                headers: {
                    "Content-Type": "multipart/form-data",            
                }
            });
            console.log(response)
            return response;
        } catch (error) {
            console.error("Error registering user:", error);
            throw error;
        }
    }
    
}

export { modAudio };
