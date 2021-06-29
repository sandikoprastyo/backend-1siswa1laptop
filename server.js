const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

//import routes
//const { db } = require('./models/');

/* server || port */
const app = express();
const port = process.env.PORT || 5000;

//middlewares
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Ok!',
    status: 200,
  });
});

/* database */
mongoose.connect(
  process.env.CONNECT_DB,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log('Connect to db success');
  },
  );

  /* impor router */
const authRoutes = require('./routers/auth');
const adminRouter = require('./routers/admin.js');
const siswaRouter = require('./routers/siswa.js');
const donaturRouter = require('./routers/donatur.js');
const stockRouter = require('./routers/stock.js');


app.use('/', authRoutes);
app.use('/donatur', donaturRouter);
app.use('/admin', adminRouter);
app.use('/siswa', siswaRouter);
app.use('/stock', stockRouter);


app.listen(port, () => {
  console.log(`Server is running on port : http://localhost:${port}`);
});
