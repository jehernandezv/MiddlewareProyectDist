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
     sendRequestAxios(5000,'localhost',res);
});
    function sendRequestAxios(port,ip,res){
    axios.get('http://'+ip+':'+port+'/api').then(async (response) => {
        await res.json({
            message:response.data
        });
    }).catch(async function (error) {
      await res.json({
           message:error.code
       });
      sendRequestAxios(6000,'localhost');
    });
}

app.listen(port, function () {
    console.log('Example app server ubuntu1 listening on port ' + port + '!');
});
