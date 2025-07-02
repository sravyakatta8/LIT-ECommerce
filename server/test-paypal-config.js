const paypal = require("./helpers/paypal");

paypal.payment.create(
  {
    intent: "sale",
    payer: {
      payment_method: "paypal",
    },
    redirect_urls: {
      return_url: "http://localhost:5173/shop/paypal-return",
      cancel_url: "http://localhost:5173/shop/paypal-cancel",
    },
    transactions: [
      {
        amount: {
          total: "1.00",
          currency: "USD",
        },
        description: "Test payment",
      },
    ],
  },
  function (error, payment) {
    if (error) {
      console.error("PayPal config test error:", error);
    } else {
      console.log("PayPal config test success:", payment);
    }
  }
);
