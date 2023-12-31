const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    return res.status(200).json( {
        data:"Raj",
        message: 'API is running'
    }
)});

router.use('/doctors', require('./doctor')); //routes to all doctors reuqest
router.use('/patients', require('./patient')); //routes to all pateints request
router.use('/reports', require('./report')); //routes to all reports request

module.exports = router;
