const express = require('express')
const ServicesServices = require('../services/services') 

function servicesApi(app) {
    const router = express.Router()
    app.use('/api/services/', router)
    const servicesServices = new ServicesServices()
    router.get('/', async function(req, res, next) {
        const tags = req.query
        try {
            const services = await servicesServices.getServices({tags})
            res.status(200).json({
                data: services,
                message: 'Trae Listado de servicios'
            })
        } catch (error) {
            next(error)
        }
    })
    router.get('/:serviceId', async function(req, res, next) {
        const {serviceId} = req.params
        try {
            const services = await servicesServices.getService({serviceId})
            res.status(200).json({
                data: services,
                message: 'Trae Listado de servicios'
            })
        } catch (error) {
            next(error)
        }
    })
    router.post('/', async function(req, res, next) {
        const {body: service} = req
        try {
            const createServicesId = await servicesServices.createServices({service})
            res.status(201).json({
                data: service,
                message: 'Nombre de servicio creado con el id : {' + createServicesId + '};'
            })
        } catch (error) {
            next(error)
        }
    })
    router.put('/:serviceId', async function(req, res, next) {
        const {serviceId} = req.params
        const {body: service} = req
        try {
            const updateServicesId = await servicesServices.updateServices({serviceId, service})
            res.status(200).json({
                data: service,
                message: 'Servicio actualizado con el id : {' + updateServicesId + '};'
            })
        } catch (error) {
            next(error)
        }
    })
    router.delete('/:serviceId', async function(req, res, next) {
        const {serviceId} = req.params
        try {
            const deleteServicesId = await servicesServices.deleteServices({serviceId})
            res.status(200).json({
                data: deleteServiceId,
                message: 'Servicio eliminado'
            })
        } catch (error) {
            next(error)
        }
    })
}

module.exports = servicesApi