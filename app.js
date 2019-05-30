const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// match different routes
const routes = require('./routes/index');
// const StoreRouter = require('./routes/StoreHandler');
// const OrderRouter = require('./routes/OrderHandler');
// const OrderItemRouter = require('./routes/OrderItemHandler');
// const PaymentRouter = require('./routes/PaymentHandler');

const app = express();

app.use(bodyParser.json({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/', routes);
// app.use('/api/store', StoreRouter);
// app.use('/api/order', OrderRouter);
// app.use('/api/payment', PaymentRouter);
// app.use('/api/order_item', OrderItemRouter);

module.exports = app;