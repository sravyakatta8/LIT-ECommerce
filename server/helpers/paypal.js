const paypal = require('paypal-rest-sdk');
require('dotenv').config(); // Ensure env variables are loaded

console.log("MODE:", process.env.PAYPAL_MODE);
console.log("ID Loaded:", !!process.env.PAYPAL_CLIENT_ID);
console.log("SECRET Loaded:", !!process.env.PAYPAL_CLIENT_SECRET);

paypal.configure({
  mode: process.env.PAYPAL_MODE || 'sandbox',
  client_id: process.env.PAYPAL_CLIENT_ID,
  client_secret: process.env.PAYPAL_CLIENT_SECRET,
});

module.exports = paypal;
