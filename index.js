const express = require ('express');
const cors = require ('cors');
const dcrRoutes=require('./Routes/DcrRoutes.js')
//const path= require('path');
//const bodyParser = require('body-parser');
const connectToMongo=require('./util/database').mongoConnect; 

//const eventRoutes = require('./Routes/event-routes');
//const userRoutes = require('./Routes/user-routes');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use(dcrRoutes);
//app.use(userRoutes);

connectToMongo(()=>{
    app.listen(port);
})

