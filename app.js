const express = require('express');
const app = express();
const env = require('./config/env');
const dbConnection = require('./config/db');

const customerRoutes = require('./src/routes/customer');
const discountRoutes = require('./src/routes/discount');

dbConnection.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('db connected!');
});

app.use(express.json());

app.use('/api/customer', customerRoutes);
app.use('/api/discount', discountRoutes);

app.listen(env.port || 3000, () => {
  console.log(`Server up and running on port ${env.port}`);
});
