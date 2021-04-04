import Main from "./component/Main";
import { AuthProvider } from "./context/AuthProvider";
import { Elements } from '@stripe/react-stripe-js';
import { SnackbarProvider } from 'notistack';

// import Stripe
import { loadStripe } from '@stripe/stripe-js';
import StripeConfig from './config/stripe.config.json'

// initialize Stripe
const stripePromise = loadStripe(StripeConfig.publishableKey)

function App() {
  return (<AuthProvider>
    <Elements stripe={stripePromise}>
      <SnackbarProvider
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}>
        <Main />
      </SnackbarProvider>
    </Elements>
  </AuthProvider>
  );
}

export default App;
