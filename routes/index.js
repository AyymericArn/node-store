const express = require('express')

const StoreRouter = require('./StoreHandler');
const OrderRouter = require('./OrderHandler');
const PaymentRouter = require('./PaymentHandler');

const mainRouter = express.Router();

mainRouter.use('/api/store', StoreRouter);
mainRouter.use('/api/order', OrderRouter);
mainRouter.use('/api/payment', PaymentRouter);

module.exports = mainRouter;