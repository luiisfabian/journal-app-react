import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async () =>{
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        const credentials = GoogleAuthProvider.credentialFromResult(result);
        const {displayName, email, photoURL, uid} = result.user;

        return {
            ok: true,
            displayName, email, photoURL, uid
        }
    } catch (error) {
        console.log(error);

        const errorCode = error.code;
        const errorMessage = error.message;
        return{
            ok: false,
            errorMessage
        }
    }
}

export const registerWithEmailAndPassword = async ({email, password, displayName}) =>{
    console.log(email, password);

    try {
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const {uid, photoURL} = resp.user;
        //Actualizar el displayName de Firebase

        updateProfile(FirebaseAuth.currentUser, {displayName});


        return{
            ok: true,
            uid, photoURL, email, displayName
        }
    } catch (error) {
        console.log(error);
        const errorCode = error.code;

        const errorMessage = error.message;
        return{
            ok: false,
            errorMessage
        }
    
    }
}