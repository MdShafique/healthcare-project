import { useEffect, useState } from "react"
import { getAuth, onAuthStateChanged, FacebookAuthProvider, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initailaizeAuthentication from "../firebase/firebase.init";

initailaizeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const GoogleProvider = new GoogleAuthProvider();
    const FacebookProvider = new FacebookAuthProvider();
    const auth = getAuth();

    const GoogleUsingSignIn = () => {
      return  signInWithPopup(auth, GoogleProvider)   
            
    }

    const FacebookWithSigIn = () => {
        signInWithPopup(auth, FacebookProvider)
            .then((result) => {
             setUser(result.user);
            })
    }

    const logOut = () => {
        signOut(auth).then(() => {
            setUser({});
        })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
    }, [])

    return {
        user,
        GoogleUsingSignIn,
        logOut,
        error,
        FacebookWithSigIn,

    }
}

export default useFirebase;