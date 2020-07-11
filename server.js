var compression = require('compression')
var express = require('express')
var moment = require('moment')
var https = require('https')
var http = require('http')
var app = express()

app.use('/', express.static(__dirname + '/dist'))
//app.use(compression)

/*app.get('/about', function(req, res){
    console.log('About')
    res.send('ADIMEN SPA')
})
*/
app.get('/', function(req, res){
    console.log('Home')
    res.redirect('/index.html')
})

var port = 3001
var ports = 3401

http.createServer(app).listen(port, function(){
    console.log('%s [INFO] portal de Adimen en estado RUNNING en el puerto %s', moment().format("YYYY/MM/DD hh:mm:ss"), port);
})

https.createServer(app).listen(ports, function(){
    console.log('%s [INFO] portal de Adimen en estado RUNNING en el puerto seguro %s', moment().format("YYYY/MM/DD hh:mm:ss"), ports);
})
