// React
import { useEffect, useState } from "react";

// Router
import { Link } from "react-router-dom";

// Stripe
import { useStripe } from "@stripe/react-stripe-js";
import StripeConfig from '../config/stripe.config.json'

// Material UI
import { Button, TextField } from "@material-ui/core";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import BlockIcon from '@material-ui/icons/Block';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';

// Provider
import { createPortalLink, getDb, useUserContext, logout, useSubscriptionContext, deleteAccount } from "../context/AuthProvider";

// Config files
import AppConfig from '../config/app.config.json'

// Snackbar
import { useSnackbar } from 'notistack';

export default function Account() {
    // get global variables from providers
    const user = useUserContext();
    const db = getDb();
    const stripe = useStripe();
    const subscriptionState = useSubscriptionContext();
    const snackbar = useSnackbar();

    // nickname
    const [displayName, setDisplayName] = useState(user?.displayName);

    // versioning
    const localVersion = AppConfig.version;
    const [onlineVersion, setOnlineVersion] = useState<string | undefined>(undefined);
    const isVersionUpToDate = onlineVersion === localVersion;

    // request version information from the database
    useEffect(() => {
        db.collection('public_data').doc('app_info').get().then((snap) => {
            const appInfo = snap.data();
            setOnlineVersion(appInfo?.version);
        });
    }, [db])

    // button click handlers
    function handleLogout() {
        logout();
    }
    const handleDeleteAccount = () => {
        const confirmDelete = window.confirm("Are you sure?");
        if (user && confirmDelete) {
            deleteAccount(user);
        }
    };
    const handleCreateNewSubscription = async () => {
        if (user) {
            snackbar.enqueueSnackbar('Redirecting to Stripe...', { variant: 'info' });
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
                        }
                    }
                }
            });
        }

    }
    async function handleCreatePortalLink() {
        snackbar.enqueueSnackbar('Redirecting to Stripe...', { variant: 'info' });
        await createPortalLink();
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
            <Button variant={matVariant} fullWidth={true} startIcon={<SaveIcon />} onClick={handleUpdateProfile} disabled={true}>Save</Button>
        </div>
        <div>
            <h2>Subscriptions</h2>
            <div>
                {subscriptionState?.subscriptionLevel ? subscriptionState.subscriptionLevel : 'None'}
                {subscriptionState ?
                    <CheckCircleOutlineIcon style={{ color: "green" }}></CheckCircleOutlineIcon> :
                    <BlockIcon style={{ color: "red" }}></BlockIcon>}
                {subscriptionState ?
                    <div>
                        <Button variant={matVariant} fullWidth={true} onClick={handleCreatePortalLink}>Manage Subscriptions</Button>
                    </div> :
                    <div>
                        <Button variant={matVariant} fullWidth={true} onClick={handleCreateNewSubscription} >Subscribe</Button>
                    </div>
                }
            </div>
            {/* give more information below */}
            {/* new Date(subData.cancel_at.seconds*1000).toLocaleDateString() */}
        </div>
        <br></br>
        <div>
            <h2>Version Info</h2>
            <div>UI version: {localVersion}</div>
            <div>Up to date: {isVersionUpToDate ?
                <CheckCircleOutlineIcon style={{ color: "green" }}></CheckCircleOutlineIcon> :
                <div>
                    <BlockIcon style={{ color: "red" }}></BlockIcon>
                    <p>
                        Your app is out of date. The current version is {onlineVersion}<br></br>
                        Follow the instructions <Link to="/install">here</Link> if you need help reinstalling the app.
                    </p>
                </div>}
            </div>
        </div>
        <br></br>
        <div>
            <Button variant={matVariant} fullWidth={true} onClick={handleLogout} >Logout</Button>
        </div>
        <br></br>
        <div>
            <Button variant={matVariant} fullWidth={true} startIcon={<DeleteIcon />} onClick={handleDeleteAccount} color="secondary">Delete Account</Button>
        </div>

    </div>
}