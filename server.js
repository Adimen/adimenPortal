var express = require('express')
var app = express()

app.get('/', function(req, res){
    res.send('ADIMEN SPA')
})

var port = 3001

app.listen(port, function(){
    console.log('[INFO] portal de Adimen en estado RUNNING en el puerto %s', port);
})