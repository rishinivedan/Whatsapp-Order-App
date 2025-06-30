const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // ⬅️ Add this line
const whatsappRoutes = require('./routes/whatsapp');
const ordersRoutes = require('./routes/orders');

const app = express();
const port = 3000;

app.use(cors()); // ⬅️ Enable CORS for all requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // ⬅️ Just in case you need JSON parsing later

app.use('/', whatsappRoutes);
app.use('/', ordersRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
