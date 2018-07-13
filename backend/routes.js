//setup express bacckend with npm dependencies
const express = require('express');
var app = express();



const router = express.Router();

// YOUR API ROUTES HERE

// SAMPLE ROUTE
router.use('/users', (req, res) => {
    res.json({ success: true });
});

module.exports = router;
