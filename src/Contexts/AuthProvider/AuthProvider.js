import React, { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const user = {displayName: 'nafis'}

    const providerLogin = (provider) =>{
        return signInWithPopup(auth,provider);
    }
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logout = () =>{
        return signOut(auth);
    }

    const authInfo ={user,
        createUser,
        signIn,
        providerLogin,
        logout
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;