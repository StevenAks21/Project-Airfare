const express = require('express');
const router = express.Router();

router.get(`/`, async(req, res) => {
    res.json({hi: true})
})

module.exports = router;