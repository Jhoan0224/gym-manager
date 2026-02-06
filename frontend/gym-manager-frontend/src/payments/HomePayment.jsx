// seccion index 
import {CheckoutProvider} from '@stripe/react-stripe-js/checkout';
import {loadStripe} from '@stripe/stripe-js';

import CheckoutForm from './CheckFormPayment';


// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51SqRviPpNnOrueC9J4xe9htAQCexLHFX0JO92bJRdLLCGGQ30fzMIP4CbRsVrRk48FmeMy39LHgWEEN2IYQMklPR00mg8IC2xi');

import { useEffect, useState } from "react";

export default function App() {
  const [clientSecret, setClientSecret] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/gym-365/payment/load", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  if (!clientSecret) {
    return <div>Cargando pago...</div>;
  }

  return (
    <CheckoutProvider
      stripe={stripePromise}
      options={{ clientSecret }}
    >
      <CheckoutForm />
    </CheckoutProvider>
  );
}

