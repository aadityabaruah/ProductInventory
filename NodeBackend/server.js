const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');  // Assuming you have initialized Sequelize and have the models directory.
const productRoutes = require('./routes/product');
const reviewRoutes = require('./routes/review');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/products', productRoutes);
app.use('/reviews', reviewRoutes);

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// Optional: Sync the database models
sequelize.sync({ alter: true })  // The "alter" option updates the table if there are any changes in the model.
    .then(() => {
        console.log('Database synced');
    })
    .catch(err => {
        console.error('Error syncing database:', err);
    });
