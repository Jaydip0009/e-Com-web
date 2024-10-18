const express = require ('express')
require ("dotenv").config
const cors = require ("cors");
const DBconnect = require('./config/db');
const app = express();
app.use(cors());
app.use(express.json())
const port = process.env.port || 8090;

app.get('/', (req, res) => {
    res.send("running........!");    
})

app.listen(port, ()=> {
    console.log("done...................!");
    DBconnect()
})