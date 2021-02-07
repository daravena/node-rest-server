require('./config/config')
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json());
// respond with "hello world" when a GET request is made to the homepage
app.get('/usuarios', function (req, res) {
  res.json('hello world');
});

app.post('/usuarios', function (req, res) {

  if (req.body.nombre === undefined) {
    res.status(400).json({
      ok: false,
      message: 'Nombre es necesario'
    })
  }
  else {
    res.json(
      {
        data: req.body.nombre
      }

    );
  }

});

app.put('/usuario/:id', function (req, res) {
  const id = req.params.id;
  res.json(
    {
      id
    }
  );
});

app.delete('/usuarios', function (req, res) {
  res.json('delete usuario');
});

app.listen(process.env.PORT, () => {
  console.log('escuchando en puerto: ', process.env.PORT);
})