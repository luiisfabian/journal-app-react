import { singInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, logOuth, login } from "./authSlice";

export const checkAutentication = (email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
    }
}
export const startGoogleSignIn = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials())
        // await singInWithGoogle()
        const result = await singInWithGoogle();
        if ( !result.ok ) return dispatch( logOuth( result.errorMessage ) );

        dispatch(login(result))
    }
}


export const startLogout = () => {
    return async( dispatch ) => {
        
        await logoutFirebase();

        dispatch( logOuth() );

    }
}