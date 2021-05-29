const express = require('express');
const database = require('./config/database');

const itemController = require('./controllers/item');

const app = express();

app.get('/', itemController.getItems);

database.connect().then(() => {
    app.listen(2121, () => console.log('Listening'));
});
