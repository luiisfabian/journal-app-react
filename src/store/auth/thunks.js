import { loginWithEmailAndPassword, registerWithEmailAndPassword, singInWithGoogle } from "../../firebase/providers";
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

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) =>{
    console.log({ email, password, displayName });
    return async(dispatch) =>{
        dispatch(checkingCredentials()   )

        const {uid, ok, photoURL, errorMessage } = await registerWithEmailAndPassword({email, password, displayName})

        if(!ok) return dispatch(logOuth({errorMessage}))

        dispatch(login({uid, displayName, email, photoURL}))
    }
}

export const startLoginWithEmailPassWord = ({email, password}) =>{
    return async(dispatch) => {
        dispatch(checkingCredentials());

        const result = await loginWithEmailAndPassword({email, password, errorMessage});
        console.log(result);

        if(!ok) return dispatch(logOuth({errorMessage}))
        dispatch(login(result))
    }
}