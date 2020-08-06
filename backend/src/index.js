var express = require('express');
var cors = require('cors');
var morgan = require('morgan');
var body_parser = require('body-parser');
var axios = require('axios');
var port = process.argv[2];

var app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(body_parser.urlencoded({ extended: false }));

app.get('/', async (req,res) => {
    axios.get('http://localhost:5000/api').then(async (response) => {
        await res.json({
            message:response.data
        }).catch((error) => {
            res.send(error);
            console.log(error);
        })
    });
});

app.listen(port, function () {
    console.log('Example app server ubuntu1 listening on port ' + port + '!');
});
