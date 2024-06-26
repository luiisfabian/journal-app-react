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
        const errorCode = error.code;

        const errorMessage = error.message;
        return{
            ok: false,
            errorMessage
        }
    
    }
}

export const loginWithEmailAndPassword = async ({email, password}) =>{
    try {
        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        console.log(resp.user);
        const { uid, photoURL, displayName} = resp.user;
        return {
            ok: true,
            uid, photoURL, displayName
        }
    } catch (error) {
        
        return { ok: false, errorMessage: error.message }

    }
}

export const logoutFirebase = async () =>{
    try {
        const resp = await FirebaseAuth.signOut();

console.log(resp);        
        return {
            ok: true,
           
        }
    } catch (error) {
        
        return { ok: false, errorMessage: error.message }

    }

}