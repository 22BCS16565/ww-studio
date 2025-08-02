const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const projectRoutes = require('./routes/projectRoutes');

dotenv.config();

const app = express();

app.use(cors({
  origin: 'http://localhost:3000', // adjust if needed
}));

app.use(express.json());

// Routes
app.use('/api/projects', projectRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB connected ✅'))
  .catch((err) => console.error('MongoDB error ❌', err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
