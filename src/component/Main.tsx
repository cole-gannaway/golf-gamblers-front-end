// import router
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";


export default function Main() {
    return <Router>
        <Switch>
            <Route path="/test">
                <div>Testing...</div>
                <Link to="/">Back to Home</Link>
            </Route>
            <Route path="/">
                <div>Welcome Home</div>
                <Link to="/test">Test Link</Link>
            </Route>
        </Switch>
    </Router>
}