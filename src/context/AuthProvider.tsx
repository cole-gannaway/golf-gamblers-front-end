import React, { createContext, useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

// import Firebase
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";

import FireBaseConfig from '../config/firebase.config.json'

// initalize Firebase
const app = (!firebase.apps.length) ? firebase.initializeApp(FireBaseConfig) : firebase.app();
const db = app.firestore();
const auth = app.auth();
auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
const functions = app.functions('us-central1');
let unsubscribeCallbacksMap: Map<string, (() => void)> = new Map();

// create contexts
const AuthUserContext = createContext<firebase.User | null>(null);
const SubscriptionContext = createContext<any | undefined>(undefined);

interface IAuthContextProps {
    children: any
}

// AuthProvider wraps all of the Auth functionality
export function AuthProvider(props: IAuthContextProps) {
    const [userState, setUserState] = useState<firebase.User | null>(null);
    const [subscriptionState, setSubscriptionState] = useState<any | undefined>(undefined);
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                const unsubscribe = db.collection('users')
                    .doc(user.uid)
                    .collection('private').doc('account-data')
                    .onSnapshot((snap) => {
                        if (snap.exists) {
                            const subData = snap.data();
                            if (subData?.subscriptionState === 'Basic') {
                                // currently only Basic exists, can add different tiers later
                                setSubscriptionState({ subscriptionLevel: 'Basic' })
                            }
                        }
                    });
                pushUnsubscribeCallback(unsubscribe);
            } else {
                setSubscriptionState(undefined);
            }
            setUserState(user)
        });
    }, []);
    return <AuthUserContext.Provider value={userState}>
        <SubscriptionContext.Provider value={subscriptionState}>
            {props.children}
        </SubscriptionContext.Provider>
    </AuthUserContext.Provider>;
}

// expose methods for accessing different AuthContexts 
export function useUserContext() {
    return useContext(AuthUserContext);
}
export function useSubscriptionContext() {
    return useContext(SubscriptionContext);
}

// expose globabl variables
export function getAuth() {
    return auth;
}

export function getDb() {
    return db;
}

export function getFunctions() {
    return functions
}

/**
 * Any onSnapshot calls from firebase will return an unsubscribe 
 * method to kill the listener to that portion of the database, 
 * all listeners will want to be killed on logout or on account delete.
 * Push the unsubscribe method to be called later during one of these actions.
 */
export function pushUnsubscribeCallback(unsubscribe: (() => void)) {
    let aUUID = uuidv4();
    unsubscribeCallbacksMap.set(aUUID, unsubscribe);
    return aUUID;
}

function unsubScribeFromAllListeners() {
    // call each unsubscribe method
    unsubscribeCallbacksMap.forEach((unsubscribe) => {
        unsubscribe();
    });
    // reset map
    unsubscribeCallbacksMap.clear();
}

export function unsubscribeFromListener(id: string) {
    const unsubscribe = unsubscribeCallbacksMap.get(id);
    if (unsubscribe) {
        unsubscribe();
        unsubscribeCallbacksMap.delete(id);
    } else {
        console.error("No listener with the id " + id + " exists");
    }
}

export function logout() {
    unsubScribeFromAllListeners();
    auth.signOut();
}

export function deleteAccount(user: firebase.User) {
    unsubScribeFromAllListeners();
    user.delete().then(() => console.log('Successfully deleted account')).catch((e) => console.error(e));
}

// MISC Stripe things
export async function createPortalLink() {
    // code copied from the docs that redirects to manage stripe account
    const functionRef = functions.httpsCallable('ext-firestore-stripe-subscriptions-createPortalLink');
    const { data } = await functionRef({ returnUrl: window.location.origin });
    window.location.assign(data.url);
    return true;
}


// Configure FirebaseUI.
export const uiConfig: firebaseui.auth.Config = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // We will display email
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    callbacks: {
        // Avoid redirects after sign-in.
        signInSuccessWithAuthResult: () => false
    }
};
