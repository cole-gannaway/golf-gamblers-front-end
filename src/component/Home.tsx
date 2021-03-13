import { useUserContext } from "../context/AuthProvider";
export default function Home() {
    const user = useUserContext();
    return <div>
        <div>Welcome {user?.displayName} !</div>
    </div>
}