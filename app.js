const express = require('express');
const morgan = require('morgan');
const dataRouter = require('./routes/dataRoutes');
const adminRouter = require('./routes/adminRoutes');

const app = express();
var cors = require('cors');
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
app.use(express.json());
app.use(cors({
    origin: '*'
}));
app.use((req, res, next) => {
    console.log('Hello from the middleware 👋');
    next();
});
app.use('/api/v1/industrydata', dataRouter);
app.use('/api/v1/admin', adminRouter);

module.exports = app;