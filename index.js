const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const transactionsRoutes = require('./routes/transactions');
const app = express();
const env = require('dotenv').config();
  
connectDB();

app.use(express.json());    
// income route 
app.use('/', transactionsRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
