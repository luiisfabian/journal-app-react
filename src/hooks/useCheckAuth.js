import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FirebaseAuth } from "../firebase/config";
import { logOuth, login } from "../store/auth";

export const useCheckAuth = () =>{

    const { status } = useSelector(state => state.auth)

    const dispatch = useDispatch();
    useEffect(() => {
      onAuthStateChanged(FirebaseAuth, async (user) => {
        console.log(user);
  
        if (!user) return dispatch(logOuth());
        const { uid, displayName, email, photoURL } = user
        dispatch(login({ uid, displayName, email, photoURL }))
      });
  
    }, [])

    return {
        status
    }
  
  
}