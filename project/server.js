const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const mongoose = require('mongoose');
mongoose.connect(process.env.MLAB);

const Contact = mongoose.model('Contact', {
  name: String,
  phone: String,
  birthday: String,
})

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json())

app.post('/contact/create', function(req, res){
  new Contact(req.body)
    .save()
    .then((doc) => res.json({id:doc.id}))
    .catch((err) => res.status(500).end(err.message))
});

app.get('/contact', function(req, res){
  Contact.find({}, (err, contacts) => {
    if (err) res.status(500).end(err.message)
    else res.json(contacts)
  })
});

app.get('/contact/:id', function(req, res){
  Contact.findById(req.params.id, (err, doc) => {
    if (err) res.status(500).end(err.message)
    else res.json(doc)
  })
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 1337);
