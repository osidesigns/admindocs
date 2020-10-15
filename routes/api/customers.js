const express = require('express');
const router = express.Router();
const customers = require('../../Customers');

router.get('/', (req, res) => {
    res.json(customers);
})

router.get('/:id', (req, res) => {
    const found = customers.some(customer => customer.id === parseInt(req.params.id))
    if(found){
        res.json(customers.filter(customer => customer.id === parseInt(req.params.id)));
    }else{
        res.status(400).json({msg: `No customer found with the id of: ${req.params.id}`});
    }
});

module.exports = router;