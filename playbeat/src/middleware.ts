
import { defineMiddleware } from "astro/middleware";
import { TOKEN, PUBLIC_ROUTES } from "./constants";
import { userData } from "./utils/userData";
import { getFollowers } from "./utils/getFollowers";

// The JWT secret 
// const secret = new TextEncoder().encode(import.meta.env.JWT_SECRET_KEY);



export const onRequest = defineMiddleware(async (context, next) => {
  // Ignore auth validation for public routes
  if (PUBLIC_ROUTES.includes(context.url.pathname)) {
   // Respond as usual 
    return next();
  }

  // Get the token from cookies 
  const token = context.cookies.get(TOKEN)?.value;
  //console.log(token);
  // Verify the token 

  if(token !== null && token !== "" && token !== undefined){
    try{

    
      const response = await getFollowers(token);

      
      const user = response.data;

      context.locals.usuario = user;
      

          
  } catch (error) {
    if (error instanceof TypeError) {
        console.log('Error: ', error.message);
    } else {
        console.log('Error: ', error);
    }

  }
    return next();
  }else {
    return Response.redirect(new URL("/", context.url));
  }
  

  
   




});