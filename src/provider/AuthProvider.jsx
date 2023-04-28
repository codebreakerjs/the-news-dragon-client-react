import React, { createContext } from 'react';

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import App from '../App';
import app from '../firebse/firebase.config';
import { useEffect } from 'react';
import { useState } from 'react';
export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, passwrod)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, passwrod);
    }

    const signIn = (email, passwrod)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, passwrod);
    }

    const logOut = ()=>{
        setLoading(true);
        return signOut(auth);
    }

    // auth state change observer
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log('logged in user inside the auth state observer', loggedUser)
            setUser(loggedUser);
            setLoading(false);
        })
        return()=>{
            unsubscribe();
        }
    },[])

    const authInfo ={
        user,
        loading,
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