import React, { createContext } from 'react';

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import App from '../App';
import app from '../firebse/firebase.config';
import { useEffect } from 'react';
import { useState } from 'react';
export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)

    const createUser = (email, passwrod)=>{
        return createUserWithEmailAndPassword(auth, email, passwrod);
    }

    const signIn = (email, passwrod)=>{
        return signInWithEmailAndPassword(auth, email, passwrod);
    }

    const logOut = ()=>{
        return signOut(auth);
    }

    // auth state change observer
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log('logged in user inside the auth state observer', loggedUser)
            setUser(loggedUser);
        })
        return()=>{
            unsubscribe();
        }
    },[])

    const authInfo ={
        user,
        createUser,
        signIn,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;