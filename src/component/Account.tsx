// Stripe
import { useStripe } from "@stripe/react-stripe-js";

// Material UI
import { Button, TextField } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';

// Provider
import { createPortalLink, getDb, useUserContext, logout, useSubscriptionContext, deleteAccount } from "../context/AuthProvider";

// Snackbar
import { useSnackbar } from 'notistack';

// Utils
import { createNewSubscription } from "../common/StripeUtils";

export default function Account() {
    // get global variables from providers
    const user = useUserContext();
    const db = getDb();
    const stripe = useStripe();
    const subscriptionState = useSubscriptionContext();
    const snackbar = useSnackbar();

    // button click handlers
    function handleLogout() {
        logout();
    }
    function handleDeleteAccount() {
        const confirmDelete = window.confirm("Are you sure?");
        if (user && confirmDelete) {
            deleteAccount(user);
        }
    };
    async function handleCreateNewSubscription() {
        if (user && stripe) {
            createNewSubscription(stripe, db, user, snackbar);
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
            <div><TextField variant={matVariant} fullWidth={true} label="Full Name" value={user?.displayName} disabled={true} /></div>
            <br></br>
            <Button variant={matVariant} fullWidth={true} startIcon={<SaveIcon />} onClick={handleUpdateProfile} disabled={true}>Save</Button>
        </div>
        <div>
            <h2>Subscription</h2>
            <div>
                <div>Subscription Level: {subscriptionState?.subscriptionLevel ? subscriptionState.subscriptionLevel : 'None'}</div>
                <br></br>
                {subscriptionState ?
                    <div>
                        <Button variant={matVariant} fullWidth={true} onClick={handleCreatePortalLink}>Manage Subscription</Button>
                    </div> :
                    <div>
                        <Button variant={matVariant} fullWidth={true} onClick={handleCreateNewSubscription} >Subscribe</Button>
                    </div>
                }
            </div>
        </div>
        <br></br>
        <div>
            <h2>Account Actions</h2>
            <div>
                <Button variant={matVariant} fullWidth={true} onClick={handleLogout} >Logout</Button>
            </div>
            <br></br>
            <div>
                <Button variant={matVariant} fullWidth={true} startIcon={<DeleteIcon />} onClick={handleDeleteAccount} color="secondary">Delete Account</Button>
            </div>
        </div>
    </div>
}