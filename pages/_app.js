import '../styles/globals.css';
import { AnimatePresence } from "framer-motion";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";

function MyApp({ Component, pageProps, router }) {
  const stripePromise = loadStripe(process.env.public);
  return (
    <AnimatePresence>
      <Elements stripe={stripePromise}>
        <Component {...pageProps} key = {router.route} />
      </Elements>
    </AnimatePresence>
    )
}

export default MyApp
