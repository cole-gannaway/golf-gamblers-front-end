import React, { createContext, useContext, useState } from 'react';

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import FireBaseConfig from '../config/firebase.config.json'

// initalize Firebase
const app = (!firebase.apps.length) ? firebase.initializeApp(FireBaseConfig) : firebase.app();
const db = app.firestore();
const auth = app.auth();
auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);

// create contexts
const AuthContext = createContext<firebase.auth.Auth>(auth);
const AuthDbContext = createContext<firebase.firestore.Firestore>(db);
const AuthUserContext = createContext<firebase.User | undefined>(undefined);

interface IAuthContextProps {
    children: any
}

// AuthProvider wraps all of the Auth functionality
export function AuthProvider(props: IAuthContextProps) {
    const [userState, setUserState] = useState<firebase.User | undefined>(undefined);

    // login / logout listener
    auth.onAuthStateChanged((user) => {
        if (user) {
            console.log('Succesfully logged in ' + user.displayName);
            setUserState(user)
        } else {
            // initialize and log out
            setUserState(undefined);
        }
    });


    // return both the context and the update methods
    return <AuthContext.Provider value={auth}>
        <AuthDbContext.Provider value={db}>
            <AuthUserContext.Provider value={userState}>
                {props.children}
            </AuthUserContext.Provider>
        </AuthDbContext.Provider>
    </AuthContext.Provider>;
}

// expose methods for accessing different AuthContexts 
export function useAuthContext() {
    return useContext(AuthContext);
}

export function useUserContext() {
    return useContext(AuthUserContext);
}

export function useDbContext() {
    return useContext(AuthDbContext);
}

export function authLogout() {
    auth.signOut().catch((e) => console.error(e));
}


// MISC Firebase things


// Configure FirebaseUI.
export const uiConfig: firebaseui.auth.Config = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // We will display email
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
        // Avoid redirects after sign-in.
        signInSuccessWithAuthResult: () => false
    }
};
