const express = require('express');
const mongoose = require('mongoose');
const users = require('./routes/api/users');
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");
const app = express();

//First route
app.get('/', (req, res) => res.send('Hello World!!!') );

//Use routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);


const port = 7001;
app.listen(port, () => console.log(`server running on port ${port}`));

//Db config
const db = require('./config/keys').mongoURI;
//connect to mongodb
mongoose
  .connect(db)
  .then(() => console.log('MongoDb connected'))
  .catch(err => console.log(err));