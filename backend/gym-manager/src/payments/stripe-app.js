// // This example sets up an endpoint using the Express framework.
// import express from 'express';
// import stripe from 'stripe';

// const stripeApp = express.Router();

// const stripeModule = new stripe('sk_test_51SqRviPpNnOrueC9Z4mgNxMAecf84gffgR13Of4GzvBZgoRxbF4DwHgW3mZoyMeN84aPAepcFXi0SOXtlHyWFP0i0003pUK41R');

// stripeApp.post('/load', async (req, res) => {
//   const session = await stripeModule.checkout.sessions.create({
//     line_items: [
//       {
//         price_data: {
//           currency: 'usd',
//           product_data: {
//             name: 'T-shirt',
//           },
//           unit_amount: 2000,
//         },
//         quantity: 1,
//       },
//     ],
//     mode: 'payment',
//     success_url: 'http://localhost:4242/success',
//   });

//   res.redirect(303, session.url);
// });

// export {stripeApp}