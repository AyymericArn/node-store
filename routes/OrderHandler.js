const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const {check, validationResult} = require('express-validator/check')

const Order = mongoose.model('Order')

const path = require('path');
const auth = require('http-auth');

// retrieve order
router.get(
    '/',
    (req, res) => {

        const query = req.body
        Store.findOne(query)
        .then((result) => {
            if (result !== null) {
                res.json(result);
            } else {
                res.json({error: 'not found'});
            }
        })
    }
);

// create order
router.post(
    '/',
    (req, res) => {

        const order = new Order(req.body);
        order.save()
        .then(() => { res.json({message: 'success'}); })
        .catch(() => { res.json({error: 'something went wrong'}); });

    }
);

module.exports = router;