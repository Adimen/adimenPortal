var express = require('express')
var moment = require('moment')
var app = express()

app.get('/', function(req, res){
    res.send('ADIMEN SPA')
})

var port = 3001

app.listen(port, function(){
    console.log('%s [INFO] portal de Adimen en estado RUNNING en el puerto %s', moment().format("YYYY/MM/DD hh:mm:ss"), port);
})