// Required dependencies for v1 route of server.js
const express = require('express');

// Instanced Objects
const router = express.Router();
const { allUsers, authenticate, requestMovie, register, update, userData } = require('./modules/processor');
const { validPref } = require('./middleware/validation');

router.use('/movie', validPref);

router.get('/movie', async (req, res) => {
    const result = await requestMovie(req.body);
    if(result instanceof Error) { res.status(404).send(result.message); }
    else { res.status(200).send(result); } 
});

router.post('/register', async (req, res) => {
    const result = await register(req.body);
    if(result instanceof Error) { res.status(403).send(result.message); }
    else { res.status(201).json(result); }
});

router.post('/account', async (req, res) => {
    const result = await authenticate(req.body);
    if(result instanceof Error) { res.status(401).send(result.message); }
    else { res.status(202).json(result); }
});

router.put('/account', async (req, res) => {
    const result = await update(req.body);
    if(result instanceof Error) { res.status(401).send(result.message); }
    else { res.status(200).json(result); }
});

router.put('/data', async (req, res) => {
    const result = await userData(req.body);
    if(result instanceof Error) { res.status(401).send(result.message); }
    else { res.status(200).json(result); }
});

router.get('/allusers', async (req, res) => {
    const result = await allUsers();
    res.status(200).json(result);
});

module.exports = router;