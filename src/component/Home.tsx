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
                    <p>Update your account's subscription to see this content.</p>
                </div>
            }
        </div>
    </div>
}