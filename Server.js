const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const app = require('./app');

const DB = process.env.DATABASE
mongoose.connect(DB, {
}).then(() => {
  console.log('MongoDB connected...');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

const port = process.env.PORT || 1907;
app.listen(port, () => {
  console.log(`App run on port no ${port}...`);
});