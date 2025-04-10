const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes.js');

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);

app.get('/', (req, res) => {
    res.json({ message: "Welcome To The Express Backend" });
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

// Use Vercel's provided PORT
const PORT = process.env.PORT || 3000;
module.exports = app; // Critical for Vercel
app.listen(PORT, () => console.log(`Running on ${PORT}`));