const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const api = require('./routes');
const mongoose = require('mongoose');
mongoose.connect(process.env.MLAB);
const PORT = process.env.PORT || 3000;

const User = mongoose.model('User', {
  name: String,
  age: Number,
  gender: String,
  requestStatus: false
})

//false request status means the person is available
//true means he/she has an active request

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());

app.post('/user/create', function(req, res){
  new User({
    name: req.body.name,
    age: req.body.age,
    gender: req.body.gender,
    requestStatus: false
  })
    .save()
    .then((doc) => res.json({id:doc.id}))
    .catch((err) => res.status(500).end(err.message))
});

// Path for viewing all users.
app.get('/users', function(req, res){
  User.find({}, (err, doc) => {
    if (err) res.status(500).end(err.message)
    else res.json(doc)
  })
});

// Path for viewing a specific user by id.
app.get('/users/:id', function(req, res){
  User.findById(req.params.id, (err, doc) => {
    if (err) res.status(500).end(err.message)
    else res.json(doc)
  })
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use('/api', api);

app.listen(PORT, error => {
  error
  ? console.error(error)
  : console.info(`==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`);
});
