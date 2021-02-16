var express = require('express');
var router = express.Router();
let st = require('../utils/storage');

// import {addOrder, getOrders} from "../utils/storage"

/* GET orders listing. */
router.post('/create', function(req, res, next) {
    console.log(req)
    res.send(st.addOrder(JSON.parse(req.body)));
});

/* GET orders listing. */
router.get('/', function(req, res, next) {
    res.send(st.getOrders());
});

/* GET orders listing. */
router.get('/:id', function(req, res, next) {
    res.send(st.getOrder(req.params.id));
});

module.exports = router;
