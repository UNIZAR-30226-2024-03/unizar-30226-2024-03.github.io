import { Global } from "@/globalState/globalUrl.js";
import axios from 'axios';

async function registerUser(data: { name: any; email: any; password: any; }) {
  try {
    console.log("Sending request with data:", data);
    const response = await axios.post(Global.url + "auth/signup", data);

    console.log("Response:", response.data);

    return response.data;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
}

export { registerUser };
