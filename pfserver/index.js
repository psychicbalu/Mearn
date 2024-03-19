require('dotenv').config();
require('./DB/connection');
const express = require('express');
const cors = require('cors');
const router = require('./Router/router');


// create express server

const pfServer = express();

pfServer.use(cors());
// pars json
pfServer.use(express.json());
pfServer.use(router);

const PORT = 4000 ||  process.env.PORT;

pfServer.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

pfServer.use('/uploads',express.static('./uploads'))

pfServer.get('/',(req,res)=>{
    res.send('<h1>Project-fair started and waiting for the client request aiuuddaksudhu</h1>')
  });

  pfServer.put('/',(req,res)=>{
    res.send('tesrrrrr')
  });


