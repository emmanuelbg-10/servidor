const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const destinationsRouter = require('./routes/destinations');

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Rutas
app.use('/api/destinations', destinationsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});
