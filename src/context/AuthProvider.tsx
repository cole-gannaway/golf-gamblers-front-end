import React, { createContext, useContext, useEffect, useState } from 'react';

// import Firebase
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";

import FireBaseConfig from '../config/firebase.config.json'
import StripeConfig from '../config/stripe.config.json'

// initalize Firebase
const app = (!firebase.apps.length) ? firebase.initializeApp(FireBaseConfig) : firebase.app();
const db = app.firestore();
const auth = app.auth();
auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
const functions = app.functions('us-central1');
let unsubscribeFromSubscriptionsDb: (() => void) | undefined = undefined;

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
                unsubscribeFromSubscriptionsDb = db.collection('customers')
                    .doc(user.uid)
                    .collection('subscriptions')
                    .onSnapshot((snap) => {
                        snap.forEach((subscription) => {
                            const subData = subscription.data()
                            if (subData.product.get(StripeConfig.subscription_product_key.basic)) {
                                // currenlty only basic exists, can add different tiers using role
                                setSubscriptionState({ subscriptionLevel: 'basic' })
                            }
                        });
                    });
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

function unsubscribeToSubscriptionState() {
    if (unsubscribeFromSubscriptionsDb) {
        unsubscribeFromSubscriptionsDb();
        unsubscribeFromSubscriptionsDb = undefined;
    }
}

export function logout() {
    unsubscribeToSubscriptionState();
    auth.signOut();
}

export function deleteAccount(user: firebase.User) {
    unsubscribeToSubscriptionState();
    user.delete().then(() => console.log('Successfully deleted account')).catch((e) => console.error(e));
}

// MISC Stripe things
export async function createPortalLink(functions: firebase.functions.Functions) {
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
        firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
        // Avoid redirects after sign-in.
        signInSuccessWithAuthResult: () => false
    }
};
