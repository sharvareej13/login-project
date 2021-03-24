require('rootpath')();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 6000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
