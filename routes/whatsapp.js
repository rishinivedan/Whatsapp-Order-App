const express = require('express');
const router = express.Router();
const { saveOrderFromMessage } = require('../models/Order');

router.post('/incoming-whatsapp', async (req, res) => {
  const from = req.body.From;
  const body = req.body.Body;

  console.log(`WhatsApp message received from ${from}: ${body}`);

  try {
    const savedOrder = await saveOrderFromMessage(body);
    console.log('Order saved:', savedOrder);
  } catch (error) {
    console.error('Error saving order:', error.message);
  }

  res.set('Content-Type', 'text/xml');
  res.send('<Response></Response>');
});

module.exports = router;
