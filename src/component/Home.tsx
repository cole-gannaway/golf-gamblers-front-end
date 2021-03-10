import React from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../context/AuthProvider";
export default function Home() {
    const user = useUserContext();
    return <div>
        <div>Welcome {user?.displayName} !</div>
        <div>
            <Link to="/account">Account</Link>
        </div>
    </div>
}