import { Button, TextField } from "@material-ui/core";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { useState } from "react";

import FireBaseConfig from '../../config/firebase.config.json'

// initalize Firebase
const app = (!firebase.apps.length) ? firebase.initializeApp(FireBaseConfig) : firebase.app();
// const db = app.firestore();
const auth = app.auth();

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const createUserWithEmailAndPassword = () => {
        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;
                // ...
                if (user) {
                    console.log(user.displayName);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }
    const signIn = () => {
        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                if (user) {
                    console.log(user.displayName);
                }
                // ...
            })
            .catch((error) => {
                console.error(error);
            });

    }
    const signOut = () => {
        auth.signOut().then(() => {
            console.log('Signed out')
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
            console.error(error)
        });
    }

    const handleEmailChange = (e: any) => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e: any) => {
        setPassword(e.target.value);
    }

    return <div>
        <div>Login</div>
        <div><TextField value={email} onChange={handleEmailChange} label="Email" type="email"></TextField></div>
        <div><TextField value={password} onChange={handlePasswordChange} label="Password" type="password"></TextField></div>
        <div><Button onClick={signIn}>Login</Button></div>
        <div><Button onClick={createUserWithEmailAndPassword}>Create New User</Button></div>
        <div><Button onClick={signOut}>Logout</Button></div>
    </div>
}