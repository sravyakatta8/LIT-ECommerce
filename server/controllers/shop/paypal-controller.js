const paypal = require("../../helpers/paypal");

const executePayment = (req, res) => {
  const { paymentId, payerId } = req.body;

  paypal.payment.execute(paymentId, { payer_id: payerId }, (error, payment) => {
    if (error) {
      console.error("PayPal execute payment error:", error);
      return res.status(500).json({ success: false, error });
    } else {
      // Optionally update order status in DB here if needed
      return res.json({ success: true, payment });
    }
  });
};

module.exports = {
  executePayment,
};
