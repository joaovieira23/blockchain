const express = require('express');
const Blockchain = require('../blockchain');
const HTTP_PORT = process.env.HTTP_PORT || 3001;
const P2pServer = require('./p2p-server');

const app = express();
const bc = new Blockchain();
const p2pServer = new P2pServer(bc);

app.use(express.json());

app.get('/blocks', (req, res) => {
    res.json(bc.chain);
});

app.post('/mine', (req, res) => {
    const block = bc.addBlock(req.body.data);
    console.log(`New Block added: ${block.toString()}`);

    p2pServer.syncChain();

    res.redirect('/blocks');
});

app.listen(HTTP_PORT, () => console.log(`Listening on port ${HTTP_PORT}`));

// $ HTTP_PORT = 3002 npm run dev

p2pServer.listen();