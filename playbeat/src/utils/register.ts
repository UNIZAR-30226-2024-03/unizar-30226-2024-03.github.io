
import {Global} from "@/globalState/globalUrl.js"


async function registerUser(data: { name: FormDataEntryValue | null; email: FormDataEntryValue | null; password: FormDataEntryValue | null; }) {
    try {
      console.log(data);
      const response = await fetch(Global.url+'auth/signup', {
        method: 'POST',
        body: JSON.stringify(data)
      });
      console.log(response);
      return response;
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }
  

  export {registerUser}