const express = require('express')
const expressStatusMonitor = require('express-status-monitor');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');

const YAML = require('yamljs');

require('dotenv').config()

const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');

console.log(process.env.DB_USER);

// Variables
const app = express()
const port = process.env.PORT

// Middlewares
app.use(express.json()); 
app.use(expressStatusMonitor());
app.use(morgan('dev'));

// Swagger 
const swaggerDocument = YAML.load('./swagger.yaml'); // Cargar archivo Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Rutas
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
    console.log(`Documentación Swagger en http://localhost:${port}/api-docs`);
})