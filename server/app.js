const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Test route
app.get('/', (req, res) => {
  res.send('FIDL Server');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const feedRoutes = require('./routes/feedRoutes');
const subscriberRoutes = require('./routes/subscriberRoutes');

app.use('/feeds', feedRoutes);
app.use('/subscribers', subscriberRoutes);

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));
