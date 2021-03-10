import { useStripe } from "@stripe/react-stripe-js";
import { createPortalLink, getDb, getFunctions, useUserContext, logout, useSubscriptionContext, deleteAccount } from "../context/AuthProvider";
import StripeConfig from '../config/stripe.config.json'
import CircularProgress from '@material-ui/core/CircularProgress';
import { Button } from "@material-ui/core";
import { useState } from "react";

export default function Account() {
    const user = useUserContext();
    const db = getDb();
    const stripe = useStripe();
    const functions = getFunctions();
    const subscriptionState = useSubscriptionContext();

    const [isRedirectingToManageStripeAccount, setIsRedirectingToManageStripeAccount] = useState(false);
    const [isRedirectingToCreateSubscription, setIsRedirectingToCreateSubscription] = useState(false);

    function handleLogout() {
        logout();
    }
    const handleDeleteAccount = () => {
        if (user) {
            deleteAccount(user);
        }
    };
    const handleCreateNewSubscription = async () => {
        if (user) {
            setIsRedirectingToCreateSubscription(true);
            const docRef = await db.collection('customers').doc(user.uid).collection('checkout_sessions').add({
                price: StripeConfig.subscription_prices_keys.basic,// priceId from stripe
                success_url: window.location.origin, // return user to this screen
                cancel_url: window.location.origin, // return user to this screen
            });
            docRef.onSnapshot((snap) => {
                const data = snap.data();
                if (data) {
                    const { error, sessionId } = data;
                    if (error) {
                        // Show an error to your customer and 
                        // inspect your Cloud Function logs in the Firebase console.
                        alert('An error occured: ' + error.message);
                    }
                    if (sessionId) {
                        if (stripe) {
                            stripe.redirectToCheckout({ sessionId })
                            setIsRedirectingToCreateSubscription(false);
                        }
                    }
                }
            });
        }

    }
    const handleCreatePortalLink = async () => {
        setIsRedirectingToManageStripeAccount(true);
        await createPortalLink(functions);
        setIsRedirectingToManageStripeAccount(false);
    }


    return <div>
        <div>
            <h2>Account Information</h2>
            <div>Email: {user?.email}</div>
            <div>Name: {user?.displayName}</div>
        </div>
        <div>
            <h2>Subscription Status</h2>
            <div>Subscription State: {subscriptionState ? subscriptionState.subscriptionLevel : 'Not subscribed'}</div>
            {subscriptionState ?
                <div>
                    <Button onClick={handleCreatePortalLink}>Manage Subscriptions</Button>
                    {isRedirectingToManageStripeAccount ? <CircularProgress /> : <div></div>}
                </div> :
                <div>
                    <Button onClick={handleCreateNewSubscription}>Subscribe</Button>
                    {isRedirectingToCreateSubscription ? <CircularProgress /> : <div></div>}
                </div>
            }
            {/* give more information below */}
            {/* new Date(subData.cancel_at.seconds*1000).toLocaleDateString() */}
        </div>
        <div>
            <Button onClick={handleLogout} >Logout</Button>
        </div>
        <div>
            <Button onClick={handleDeleteAccount} color="secondary">Delete Account</Button>
        </div>
    </div>
}