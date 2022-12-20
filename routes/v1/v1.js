// Required dependencies for v1 route of server.js
const express = require('express');

// Instanced Objects
const router = express.Router();
const { requestMovie, register, authenticate } = require('./modules/processor');
const { validPref } = require('./middleware/validation');

router.use('/movie', validPref);

router.get('/movie', async (req, res) => {
    const result = await requestMovie(req.body);
    console.log(req.body);
    if(result instanceof Error) { res.status(404).send(result.message); }
    else { res.status(201).send(result); } 
});

router.post('/register', async (req, res) => {
    const result = await register(req.body);
    console.log(req.body);
    if(result instanceof Error) { res.status(403).send("account already taken"); }
    else { res.status(200).json(result); }
});

router.post('/account', async (req, res) => {
    const result = await authenticate(req.body);
    console.log(req.body);
    if(result instanceof Error) { res.status(401).send("authentication process failed"); }
    else { res.status(201).json(result); }
});

module.exports = router;