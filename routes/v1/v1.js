// Required dependencies for v1 route of server.js
const express = require('express');

// Instanced Objects
const router = express.Router();
const { requestMovie } = require('./modules/processor');
const { validPref } = require('./middleware/validation');

router.use('/movie', validPref);

router.get('/movie', async (req, res) => {
    console.log("Request passed validation");
    const result = await requestMovie(req.body);
    if(result instanceof Error) { res.status(404).send(result.message); }
    else { res.status(201).send(result); } 
});

module.exports = router;