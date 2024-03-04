import { singInWithGoogle } from "../../firebase/providers";
import { checkingCredentials } from "./authSlice";

export const checkAutentication  = ( email, password ) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
    }
}
export const startGoogleSignIn = () =>{
    return async (dispatch) =>{
        console.log("entro");
        dispatch(checkingCredentials())
        await singInWithGoogle()
    //    const result = await singInWithGoogle();
    }
}