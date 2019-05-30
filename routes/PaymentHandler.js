const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()

const Payment = mongoose.model('Payment')
const Order = mongoose.model('Order')

const path = require('path');
const auth = require('http-auth');

// create payment
router.post(
    '/',
    (req, res) => {

        const query = req.body.for

        Order.findOne(query)
        .then((result) => {
            if (result !== null && req.body.infos) {

                const registration = req.body.infos
                registration.for = String(result._id)
                const payment = new Payment(registration);
                payment.save()
                .then(() => { res.send('Thank you for your registration!'); })
                .catch(() => { res.send('Sorry! Something went wrong.'); });
            } else {
                res.json({error: 'not found'});
            }
        })

    }
);

module.exports = router;