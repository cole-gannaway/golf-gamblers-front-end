import { useState } from "react";
import { useStripe } from "@stripe/react-stripe-js";
import { Button, TextField } from "@material-ui/core";
import CircularProgress from '@material-ui/core/CircularProgress';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import BlockIcon from '@material-ui/icons/Block';

import { createPortalLink, getDb, getFunctions, useUserContext, logout, useSubscriptionContext, deleteAccount } from "../context/AuthProvider";
import StripeConfig from '../config/stripe.config.json'

export default function Account() {
    const user = useUserContext();
    const db = getDb();
    const stripe = useStripe();
    const functions = getFunctions();
    const subscriptionState = useSubscriptionContext();

    const [displayName, setDisplayName] = useState(user?.displayName);

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
    async function handleCreatePortalLink() {
        setIsRedirectingToManageStripeAccount(true);
        await createPortalLink(functions);
        setIsRedirectingToManageStripeAccount(false);
        return true;
    }
    function handleUpdateProfile() {

    }
    const matVariant = "outlined";

    return <div >
        <div>
            <h2>Account Information</h2>
            <div><TextField variant={matVariant} fullWidth={true} label="Email" value={user?.email} disabled={true} /></div>
            <br></br>
            <div><TextField variant={matVariant} fullWidth={true} label="Name" value={displayName} onChange={(e) => setDisplayName(e.target.value)} /></div>
            <br></br>
            <Button variant={matVariant} onClick={handleUpdateProfile} disabled={true}>Save</Button>
        </div>
        <div>
            <h2>Subscriptions</h2>
            <div>
                {subscriptionState ?
                    <CheckCircleOutlineIcon style={{ color: "green" }}></CheckCircleOutlineIcon> :
                    <BlockIcon style={{ color: "red" }}></BlockIcon>}
                {subscriptionState ?
                    subscriptionState.subscriptionLevel.toUpperCase() :
                    'NOT SUBSCRIBED'}
            </div>
            <br></br>
            {subscriptionState ?
                <div>
                    <Button variant={matVariant} onClick={handleCreatePortalLink}>Manage Subscriptions</Button>
                    {isRedirectingToManageStripeAccount ? <CircularProgress /> : <div></div>}
                </div> :
                <div>
                    <Button variant={matVariant} onClick={handleCreateNewSubscription}>Subscribe</Button>
                    {isRedirectingToCreateSubscription ? <CircularProgress /> : <div></div>}
                </div>
            }
            {/* give more information below */}
            {/* new Date(subData.cancel_at.seconds*1000).toLocaleDateString() */}
        </div>
        <br></br>
        <div>
            <Button variant={matVariant} onClick={handleLogout} >Logout</Button>
        </div>
        <br></br>
        <div>
            <Button variant={matVariant} onClick={handleDeleteAccount} color="secondary">Delete Account</Button>
        </div>
    </div>
}