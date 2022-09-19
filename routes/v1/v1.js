// Required dependencies for v1 route of server.js
const express = require('express');

// Instanced Objects
const router = express.Router();
const { requestMovie } = require('./modules/Processor');

router.use('/movie', async (req, res) => {
    const result = await requestMovie(req.body);
    if(result instanceof Error) { res.status(404).send(result.message); }
    else { res.status(201).send(result); } 
});

module.exports = router;