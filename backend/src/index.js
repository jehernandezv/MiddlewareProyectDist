var express = require('express');
var cors = require('cors');
var morgan = require('morgan');
var body_parser = require('body-parser');
var axios = require('axios');
var port = process.argv[2];
var app = express();
var server_1 = 'http://localhost:32300/api';
var server_2 = 'http://localhost:33300/api';
var server_3 = 'http://localhost:34020/api';

app.use(cors());
app.use(morgan('dev'));
app.use(body_parser.urlencoded({ extended: false }));

app.get('/', async (req, res) => {
    axios.get(server_1).then(async (response) => {
        await res.json({
            message: response.data
        });
    }).catch(function (error) {
        if (!error.status) {
            axios.get(server_2).then(async (response) => {
                await res.json({
                    message: response.data
                });
            }).catch(function (error) {
                if (!error.status) {
                    axios.get(server_3).then(async (response) => {
                        await res.json({
                            message: response.data
                        });
                    }).catch(function (error) {
                        if (!error.status) {
                            res.json({
                                message: "No se ha logrado establecer conexión con los servidores"
                            });
                        }
                    });
                }
            });
        }
    });
})

function getServer (_server) {
    axios.get(_server).then(async (response) => {
        await res.json({
            message: response.data
        });
    }).catch(function (error) {
}

/*axios.get(server_1).then(async (response) => {
    await res.json({
        message: response.data
    });
}).catch(function (error) {
    if (!error.status) {
        console.log("Erro de conexión");
    }
});*/

app.listen(port, function () {
    console.log('Example app server ubuntu1 listening on port ' + port + '!');
});
