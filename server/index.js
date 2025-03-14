const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const routeRoutes = require('./routes/route');
const customerRoutes = require('./routes/customer');
const reviewRoutes = require('./routes/review'); // Add this line

const app = express();

app.use(cors());
app.use(bodyparser.json());
const customerroutes = require('./routes/customer');
const routesroute = require('./routes/route');
const bookingroute = require('./routes/booking');
app.use(bookingroute);
app.use(routesroute);
app.use(customerroutes);
app.use('/api', reviewRoutes); // Add this line
app.use('/api', routeRoutes);
app.use('/api', customerRoutes);

const DBURL = 'mongodb://admin:admin@ac-sc7o4ko-shard-00-00.vqk1yid.mongodb.net:27017,ac-sc7o4ko-shard-00-01.vqk1yid.mongodb.net:27017,ac-sc7o4ko-shard-00-02.vqk1yid.mongodb.net:27017/tedbus?ssl=true&replicaSet=atlas-b13ikt-shard-0&authSource=admin&retryWrites=true&w=majority';
mongoose.connect(DBURL, {
  serverSelectionTimeoutMS: 5000 // Increase timeout to 5 seconds
})
.then(() => console.log('Mongodb connected'))
.catch(err => console.error('Mongodb connection error:', err));

app.get('/', (req, res) => {
  res.send('Hello, Ted bus is working');
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
