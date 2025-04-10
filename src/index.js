const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes.js');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());



app.use("/api/products", productRoutes);

app.get('/', (req, res) => {
    res.json({ message: "Welcome To The Express Backend" });
});

app.get('/about', (req, res)=> {
    res.send('about')
})
app.listen(port, () => {
    console.log(`App is running on http://localhost:${port}`);
});

module.exports = app;
