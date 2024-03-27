import AgentCommissionService from "../services/AgentCommissionService.js";

class AgentCommissionController{
    async getAgentCommissions(request, response, next) {
        try {
            const agentCommissions = await AgentCommissionService.getAgentCommissions();
            return response.status(200).json(agentCommissions);
        } catch (err) {
            next(err);
        }
    }

    async getAgentCommissionById(request, response, next) {
        try {
            const { id } = request.params;
            const agentCommission = await AgentCommissionService.getAgentCommissionById(id);
            return response.status(200).json(agentCommission);
        } catch (err) {
            next(err);
        }
    }

    async addAgentCommission(request, response, next) {
        try {
            const { agentId, transactionId, commission } = request.body;
            const agentCommission = await AgentCommissionService.addAgentCommission(agentId, transactionId, commission);
            return response.status(201).json(agentCommission);
        } catch (err) {
            next(err);
        }
    }

    async updateAgentCommission(request, response, next) {
        try {
            const { id } = request.params;
            const { agentId, transactionId, commission } = request.body;
            const agentCommission = await AgentCommissionService.updateAgentCommission(id, agentId, transactionId, commission);
            return response.status(200).json(agentCommission);
        } catch (err) {
            next(err);
        }
    }

    async deleteAgentCommission(request, response, next) {
        try {
            const { id } = request.params;
            const deletedAgentCommission = await AgentCommissionService.deleteAgentCommission(id);
            return response.status(204).json(deletedAgentCommission);
        } catch (err) {
            next(err);
        }
    }
}

export default new AgentCommissionController();