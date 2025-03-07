const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const PORT = 3000;

// middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// routes
app.use('/api/destinations',require('./routes/destinations'));

app.listen(3000, ()=>{
    console.log("El servidor está escuchando en el puerto: "+PORT);
});