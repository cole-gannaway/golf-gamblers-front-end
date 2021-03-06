import React from "react";
// import router
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { useUserContext } from "../context/AuthProvider";
import Login from "./auth/Login";


export default function Main() {
    const user = useUserContext();
    return <Router>
        <Switch>
            <Route path="/login">
                <Login></Login>
            </Route>
            <PrivateRoute path="/">
                <div>Welcome {user?.email} !</div>
            </PrivateRoute>
        </Switch>
    </Router>
}

interface IRouteProps {
    children: any,
    path: string
}

function PrivateRoute({ children, ...rest }: IRouteProps) {
    let user = useUserContext();
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