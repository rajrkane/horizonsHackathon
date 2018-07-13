const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const api = require('./backend/routes');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI);

const User = mongoose.model('User', {
  name: String,
  age: Number,
  gender: String,
  requestStatus: false
})
//false request status means the person is available
//true means he/she has an active request

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

//Path for registration
//render registration
app.post('/user/create', function(req, res) {
  new User(req.body)
    .save()
    .then((doc) => res.json({id: doc.id}))
    .catch((err) => res.status(500).end(err.message))
});

//Path for viewing all users
//render UserList
app.get('/users', function(req, res){
  User.find({}, (err, doc) => {
    if (err) res.status(500).end(err.message)
    else res.json(doc)
  })
});

//Path for viewing a specific user by ID
//render User
app.get('/user/:id', function(req, res) {
  User.findById(req.params.id, (err, doc) => {
    if(err) res.status(500).end(err.message)
    else res.json(doc)
  })
});


app.get('/', (request, response) => {
    response.sendFile(__dirname + '/public/index.html'); // For React/Redux
});

app.use('/api', api);

app.listen(PORT, error => {
    error
    ? console.error(error)
    : console.info(`==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`);
});
