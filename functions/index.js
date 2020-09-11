const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express = require('express');
const cors = require('cors');
const { request } = require('express');
const stripe = require('stripe')('sk_test_51HPxrnJLmFo3I5OXaZgUcDa3rrDEW1DgiCjjEEgFsyqb7JbyMQ7S8R4JzfqGrcOpxPNNDvQYrvM7qvM9zLuTpIf6004Q4xVocp');

//App config
const app = express();

//Middleware
app.use(cors({ origin:true }));
app.use(express.json());

//API Roots
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('payment request receive Boom!! for this amount >>>', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd",
      });

      //Ok esta todo bien y se creo algo
      response.status(201).send({
          clienteSecret: paymentIntent.client_secret,
      });
});

//Listen commands
exports.api = functions.https.onRequest(app);


//Example endpoint
// http://localhost:5001/clone-c4f60/us-central1/api