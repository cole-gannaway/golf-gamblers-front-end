// import Stripe
import { Stripe } from '@stripe/stripe-js';
import StripeConfig from '../config/stripe.config.json';

// import Firebase
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// import Notistack
import { ProviderContext } from 'notistack';

export async function createNewSubscription(
  stripe: Stripe,
  db: firebase.firestore.Firestore,
  user: firebase.User,
  snackbar: ProviderContext
) {
  snackbar.enqueueSnackbar('Redirecting to Stripe...', { variant: 'info' });
  const docRef = await db
    .collection('customers')
    .doc(user.uid)
    .collection('checkout_sessions')
    .add({
      price: StripeConfig.subscription_prices_keys.basic, // priceId from stripe
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
        stripe.redirectToCheckout({ sessionId });
      }
    }
  });
}
