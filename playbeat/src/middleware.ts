
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
 

 /* if(token === null || token === "" || token === undefined){
    return Response.redirect(new URL("/", context.url));

  }else {
    return next();
  }*/
  return next();

});