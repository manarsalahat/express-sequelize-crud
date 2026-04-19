const express = require('express');
const app = express();

const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'API is running successfully' });
});

app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});