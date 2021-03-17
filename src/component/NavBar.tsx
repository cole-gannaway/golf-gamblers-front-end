import { Link } from "react-router-dom";
import { AppBar, Toolbar } from "@material-ui/core";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import AppIcon from '../common/AppIcon'
import { useThemeContext } from "../context/ThemeProvider";
export default function NavBar() {
    const theme = useThemeContext();
    return <AppBar position="static" style={{ backgroundColor: theme.background_color }}>
        <Toolbar>
            <AppIcon></AppIcon>
            <div style={{ flexGrow: 1 }}></div>
            <Link to="/account" style={{ color: "white" }}>
                <AccountCircleIcon aria-label="account" color="inherit"></AccountCircleIcon>
            </Link>
        </Toolbar>
    </AppBar>
}