const express = require('express')
const data = require('../data/data')

function serviceCardApi(app) {
    const router = express.Router()
    app.use('/api/serviceCard/', router)
    router.get('/getInformationCard-1.0', async function(req, res, next) {
        try {
            const services = await Promise.resolve(data)
            res.status(200).json({
                data: services,
                message: 'Trae Listado de servicios'
            })
        } catch (error) {
            next(error)
        }
    })
}

module.exports = serviceCardApi