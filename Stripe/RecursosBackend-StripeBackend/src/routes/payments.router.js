const { Router } = require('express');
const PaymentService = require('../services/payment.service');

const router = Router();

// Os produtos correspondem aos que estão no frontend
const products = [
  { id: 1, name: "batatas fritas", price: 1000 },
  { id: 2, name: "queijo", price: 500 },
  { id: 3, name: "hambúrguer", price: 1500 },
  { id: 4, name: "refrigerante", price: 1000 },
  { id: 5, name: "doces", price: 800 }
]

router.post('/payment-intents', async (req, res) => {
  try {
    const productRequested = products.find(product => product.id === parseInt(req.query.id));
    if (!productRequested) {
      return res.status(404).send({ status: "error", error: 'Product not found' });
    }
    const paymentintentInfo = {
      amount: productRequested.price,
      currency: 'usd',
      metadata: {
        userId: 'id autogerado pelo Mongo',
        orderDetails: JSON.stringify({
          [productRequested.name]: 2
        }, null, '\t'),
        // endereço de entrega
        address: JSON.stringify({
          street: 'Rua da Alegria',
          postalCode: '12345-678',
          externalNumber: "123123"
        }, null, '\t')
      }
    }
    const service = new PaymentService();
    let result = await service.createPaymentIntent(paymentintentInfo);
    console.log(result);
    res.send({ status: "success", payload: result });
  } catch (error) {
    console.log("Error creating payment intent", error);
    res.status(500).send({ status: "error", error: 'Internal Server Error' });
  }
})

module.exports = router;