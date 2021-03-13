import { Link } from "react-router-dom";
import { useSubscriptionContext, useUserContext } from "../context/AuthProvider";
export default function Home() {
    const user = useUserContext();
    const subscriptionState = useSubscriptionContext();

    return <div>
        <div>Welcome {user?.displayName} !</div>
        <div>
            {subscriptionState ? <div></div> :
                <div>
                    <div>Update your subscription to see this content</div>
                    <div><Link to="/account">Subscribe</Link></div>
                </div>
            }
        </div>
    </div>
}