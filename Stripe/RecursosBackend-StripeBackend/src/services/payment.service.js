const Stripe = require('stripe');

class PaymentService {
  constructor() {
    this.stripe = Stripe(process.env.STRIPE_SECRET_KEY);
  }

  createPaymentIntent = async (data) =>{
    try {
      console.log("data: ", data);
      const paymentIntent = await this.stripe.paymentIntents.create(data);
      console.log(paymentIntent);
      return paymentIntent;
    } catch (error) {
      throw new Error(`Error creating payment intent: ${error.message}`);
    }
  }

  confirmPaymentIntent = async (paymentIntentId) => {
    try {
      const paymentIntent = await this.stripe.paymentIntents.confirm(paymentIntentId);
      console.log(paymentIntent);
      return paymentIntent;
    } catch (error) {
      throw new Error(`Error confirming payment intent: ${error.message}`);
    }
  }
}

module.exports = PaymentService;