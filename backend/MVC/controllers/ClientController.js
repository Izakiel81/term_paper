import ClientService from '../services/ClientService.js';

class ClientController {

    async getClients(request, response, next) {
        try {
            const clients = await ClientService.getClients();
            response.status(200).json(clients);
        } catch (error) {
            next(error);
        }
    }

    async getClientById(request, response, next) {
        try {
            const client = await ClientService.getClientById(request.params.id);
            response.status(200).json(client);
        } catch (error) {
            next(error);
        }
    }

    async addClient(request, response, next) {
        try {
            const { name, email, phone } = request.body;
            const client = await ClientService.addClient(name, email, phone);
            response.status(201).json(client);
        } catch (error) {
            next(error);
        }
    }

    async updateClient(request, response, next) {
        try {
            const { name, email, phone } = request.body;
            const client = await ClientService.updateClient(request.params.id, name, email, phone);
            response.status(200).json(client);
        } catch (error) {
            next(error);
        }
    }

    async deleteClient(request, response, next) {
        try {
            const client = await ClientService.deleteClient(request.params.id);
            response.status(200).json(client);
        } catch (error) {
            next(error);
        }
    }
}

export default new ClientController();