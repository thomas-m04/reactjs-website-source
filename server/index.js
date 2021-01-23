const express = require('express');
const path = require('path');
const app = new express();
const bodyParser = require('body-parser')

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (request, response) => {
  response.sendFile(`${__dirname}/client/build/index.html`);
});

app.post('/login', bodyParser.json(), (request, response) => {
    console.log(request.body)
    response.send("Logged in successfully!")
});

app.listen(5000, () => console.log('Server started'))