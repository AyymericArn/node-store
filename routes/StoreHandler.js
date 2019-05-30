const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const {check, validationResult} = require('express-validator/check')

const Store = mongoose.model('Store');

const path = require('path');
const auth = require('http-auth');

// routes

// retrieve store
router.get('/', (req, res) => {
    const query = req.body
    Store.findOne(query)
    .then((result) => {
        if (result !== null) {
            res.json(result);
        } else {
            res.json({error: 'not found'});
        }
    })
});

// create store
router.post(
    '/',
    // [
    //     check('name')
    //         .isLength({ min: 1 }),
    //     check('email')
    //         .isLength({ min: 1 })
    // ],
    (req, res) => {

        // const errors = validationResult(req);

        // if (errors.isEmpty()) {

        const store = new Store(req.body);
        store.save()
        .then(() => { res.send('Thank you for your registration!'); })
        .catch(() => { res.send('Sorry! Something went wrong.'); });
            
        // }
    }
);

// create/update store
router.put(
    '/:name',
    // [
    //     check('name')
    //         .isLength({ min: 1 }),
    //     check('email')
    //         .isLength({ min: 1 })
    // ],
    (req, res) => {

        const name = req.params.name

        // const errors = validationResult(req);

        // if (errors.isEmpty()) {

        // if exists

        Store.findOneAndUpdate(
            {
                name: name
            },
            req.body,
            () => console.log('executes')
        )
        .then((result) => {

            if (result !== null) {

                res.json({message: 'store updated successfully'}) ;

            } else {

                const newStore = req.body
                newStore.name = req.params.name

                // if not existing, create
                const store = new Store(newStore);
                store.save()
                .then(() => { res.json({message: 'store created successfully'}); })
                .catch(() => { res.json({error: 'an error occured'}); });                

            }
        })
        .catch(() => { res.json({error: 'an error occured'}) })

        // else
            
        // }
    }
);

module.exports = router;