// import router
import React from "react";
import {
    HashRouter,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import Login from "./auth/Login";


export default function Main() {
    return <HashRouter basename='/'>
        <Switch>
            <Route path="/login">
                <Login></Login>
                <Link to="/">Back to Home</Link>
            </Route>
            <Route path="/">
                <div>Welcome Home</div>
                <Link to="/login">Login</Link>
            </Route>
        </Switch>
    </HashRouter>
}