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
  .connect(`${process.env.MONGO_URI}/kumkum8950`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('✅ MongoDB connected to kumkum8950'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));


// Start server
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get('/', (req, res) => {
  res.send('✅ Server is Live on Render!');
});

