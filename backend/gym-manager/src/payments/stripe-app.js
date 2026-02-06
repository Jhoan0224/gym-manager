// // This example sets up an endpoint using the Express framework.
// import express from 'express';
// import stripe from 'stripe';

// const stripeApp = express.Router();

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