const {serviceMock} = require('../data/data')
const data = require('../data/data')

class ServicesServices {
    async getServices() {
        const services = await Promise.resolve(serviceMock)
        console.log('TRAE LOS SERVICIOS :' + data)
        console.log(services)
        return services || data || []
    }
    async getService() {
        const service = await Promise.resolve(serviceMock[0])
        return service || {}
    }
    async createService() {
        const createServiceId = await Promise.resolve(serviceMock[0])
        return createServiceId || {}
    }
    async updateService() {
        const updateServiceId = await Promise.resolve(serviceMock[0])
        return updateServiceId || {}
    }
    async deleteService() {
        const deleteServiceId = await Promise.resolve(serviceMock[0])
        return deleteServiceId || {}
    }
}

module.exports = ServicesServices