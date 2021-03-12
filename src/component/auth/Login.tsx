
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { Redirect, useHistory } from "react-router-dom";

import { getAuth, useUserContext } from '../../context/AuthProvider';

export default function Login() {
    const history = useHistory();
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

    // Redirect to the original requested url
    let initialPath: any = undefined;
    if (history && history.location && history.location.state) {
        const state: any = history.location.state;
        if (state && state.from && state.from.pathname) {
            initialPath = state.from.pathname;
        }
    }
    if (user) {
        if (initialPath && initialPath !== '/login') {
            return <Redirect to={initialPath}></Redirect>;
        } else {
            return <Redirect to="/"></Redirect>;
        }
    } else {
        return <div id="firebaseui-auth-container">
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
        </div>
    }
}