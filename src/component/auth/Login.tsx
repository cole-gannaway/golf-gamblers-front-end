
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { Redirect } from "react-router-dom";

import { useAuthContext, useUserContext } from '../../context/AuthProvider';

// Configure FirebaseUI.
const uiConfig = {
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

export default function Login() {
    const authContext = useAuthContext();
    const userContext = useUserContext();
    if (userContext) {
        return <Redirect to="/" />
    } else {
        return <div>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={authContext} />
        </div>
    }
}