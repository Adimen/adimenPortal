var express = require('express')
var bodyParser = require('body-parser')
var moment = require('moment')
var http = require('http')
var cors = require('cors')
var app = express()

const serviceCardApi = require('./routes/serviceCardApi')
const serviceApi = require('./routes/servicesApi')

/*app.use('/api', express.static(__dirname + '/'))*/
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
/*
app.get('/', function(req, res){
    console.log('Home')
    res.send('API')
})

app.get('/api/getInformationCard-1.0', function(req, res){
    console.log('Enviando datos de Tarjetas de Informacion ', req.hostname)
    res.status(200).json(respuesta)
})

app.get('/api/', function(req, res) {
    res.send('API G')
})*/

serviceCardApi(app)
serviceApi(app)

var port = 4001

http.createServer(app).listen(port, function(){
    console.log('%s [INFO] adimenPortalAPI en estado RUNNING en el puerto %s', moment().format("YYYY/MM/DD hh:mm:ss"), port);
})