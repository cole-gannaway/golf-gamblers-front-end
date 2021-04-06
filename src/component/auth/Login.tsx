import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { Redirect, useHistory } from "react-router-dom";

import { getAuth, uiConfig, useUserContext } from '../../context/AuthProvider';

export default function Login() {
    const history = useHistory();
    const auth = getAuth();
    const user = useUserContext();

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
        return <div>
            <div style={{ height: "20px" }}>  </div>
            <div id="firebaseui-auth-container">
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
            </div>
        </div>
    }
}