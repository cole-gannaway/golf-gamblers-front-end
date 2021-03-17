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
import Info from "./Info";
import NavBar from "./NavBar";

export default function Main() {
    return <div style={{ textAlign: "center" }}>
        <Router>
            <NavBar></NavBar>
            <Switch>
                <Route path="/login">
                    <Login></Login>
                </Route>
                <Route path="/info">
                    <Info></Info>
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
    </div>
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