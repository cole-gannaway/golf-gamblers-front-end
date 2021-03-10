
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { Redirect } from "react-router-dom";

import { getAuth, useUserContext } from '../../context/AuthProvider';

export default function Login() {
    const auth = getAuth();
    const user = useUserContext();
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
    if (user) {
        return <Redirect to="/" />
    } else {
        return <div>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
        </div>
    }
}