import React from "react";
// import router
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { useUserContext } from "../context/AuthProvider";
import Account from "./Account";
import Login from "./auth/Login";
import Home from "./Home";

export default function Main() {
    return <Router>
        <Switch>
            <Route path="/login">
                <Login></Login>
            </Route>
            <PrivateRoute path="/account">
                <Account></Account>
            </PrivateRoute>
            <PrivateRoute path="/">
                <Home></Home>
            </PrivateRoute>
            {/* Default path back to home */}
            <PrivateRoute path="*">
                <Redirect to="/"></Redirect>
            </PrivateRoute>
        </Switch>
    </Router>
}

interface IRouteProps {
    children: any,
    path: string
}

function PrivateRoute({ children, ...rest }: IRouteProps) {
    const user = useUserContext();
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
}