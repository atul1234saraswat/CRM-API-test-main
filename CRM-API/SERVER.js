const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const userRoutes = require('./routes/userRoutes');
const supplierRoutes = require('./routes/supplierRoutes');

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/suppliers', supplierRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
