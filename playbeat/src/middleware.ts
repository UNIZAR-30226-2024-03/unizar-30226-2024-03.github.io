import { errors, jwtVerify } from "jose";
import { defineMiddleware } from "astro/middleware";
import { TOKEN, PUBLIC_ROUTES } from "./constants";

// The JWT secret 
const secret = new TextEncoder().encode(import.meta.env.JWT_SECRET_KEY);

/**
* Verify if the client token is valid. 
*/
const verifyAuth = async (token?: string) => {
  if (!token) {
    return {
      status: "unauthorized",
      msg: "Please pass a request token",
    } as const;
  }

  try {
    const jwtVerifyResult = await jwtVerify(token, secret);

    return {
      status: "authorized",
      payload: jwtVerifyResult.payload,
      msg: "successfully verified auth token",
    } as const;
  } catch (err) {
    if (err instanceof errors.JOSEError) {
      return { status: "error", msg: err.message } as const;
    }

    console.debug(err);
    return { status: "error", msg: "could not validate auth token" } as const;
  }
};

export const onRequest = defineMiddleware(async (context, next) => {
  // Ignore auth validation for public routes
  if (PUBLIC_ROUTES.includes(context.url.pathname)) {
   // Respond as usual 
    return next();
  }

  // Get the token from cookies 
  const token = context.cookies.get(TOKEN)?.value;
  // Verify the token 
  const validationResult = await verifyAuth(token);

  console.log(validationResult);

  // Handle the validation result 
  switch (validationResult.status) {
    case "authorized":
      // Respond as usual if the user is authorised 
      return next();

    case "error":
    case "unauthorized":
      // If an API endpoint, return a JSON response
      if (context.url.pathname.startsWith("/api/")) {
        return new Response(JSON.stringify({ message: validationResult.msg }), {
          status: 401,
        });
      }
      // Otherwise, this is a standard page. Redirect to the root page for the user to login
      else {
        return Response.redirect(new URL("/", context.url));
      }

    default:
      return Response.redirect(new URL("/", context.url));
  }
});