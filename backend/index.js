const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

const usersRoutes = require('./rutas/users');

app.use(cors());
app.use(express.json());
app.use('/api/users', usersRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor escuchando en puerto ${PORT}`));
