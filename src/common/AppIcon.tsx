import { Link } from "react-router-dom";
import logo from './logo.svg';
export default function AppIcon(props: any) {
  return <Link to="/" style={{ color: "white" }}>
    <img src={logo} alt="HOME" height="24px"></img>
  </Link>
}