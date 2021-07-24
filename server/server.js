require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Init Middleware
app.use(express.json({ extended: false }));
app.use(cors());


// Connecting to mongoose
mongoose.connect(
  '',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  () => {
    console.log('Connected successfully to DB!');
  }
);

// Define Routes
app.use('/posts', require('./routes/posts'));

// Listening for actions
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
