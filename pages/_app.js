import '../styles/globals.css';
import { AnimatePresence } from "framer-motion";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";

function MyApp({ Component, pageProps, router }) {

  const stripePromise = loadStripe("pk_test_51JPZGuJfyBMg9VM8VrDgdBaJSx9VlrKA5Xs0pnuOKDRKLIgPqx0yBLBe8dojGZnpEeelmPQdENpLPSuVFcD2qWFU00t8IPGWzO");
  return (
    <AnimatePresence>
      <Elements stripe={stripePromise}>
        <Component {...pageProps} key = {router.route} />
      </Elements>
    </AnimatePresence>
    )
}

export default MyApp
