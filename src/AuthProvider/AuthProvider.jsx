import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword,  signInWithPopup } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app)



// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {

    const [user, setUser] =useState(null);
    const [loading, setLoading] = useState(true);
    

    const createUser = (email,password, photoURL)=> {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password, photoURL);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    

    const googleLogin = (googleProvider) =>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            console.log("observed");
            setUser(currentUser);
            setLoading(false);
        });
        return () =>{
            unSubscribe();
        }
    },[])
    
    const authInfo = {
        user,
        loading,
        createUser,
        googleLogin,
        signIn,
        logOut,
        
    };


    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;