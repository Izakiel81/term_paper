import AgentService from "../services/AgentService.js";

class AgentController {
  async getAgents(request, response, next) {
    try {
      const agents = await AgentService.getAgents();
      response.status(200).json(agents);
    } catch (error) {
      next(error);
    }
  }

  async getAgentById(request, response, next) {
    try {
      const agent = await AgentService.getAgentById(request.params.id);
      response.status(200).json(agent);
    } catch (error) {
      next(error);
    }
  }

  async addAgent(request, response, next) {
    try {
      const { name, email, phone } = request.body;
      const agent = await AgentService.addAgent(name, email, phone);
      response.status(201).json(agent);
    } catch (error) {
      next(error);
    }
  }

  async updateAgent(request, response, next) {
    try {
      const { name, email, phone } = request.body;
      const agent = await AgentService.updateAgent(
        request.params.id,
        name,
        email,
        phone
      );
      response.status(200).json(agent);
    } catch (error) {
      next(error);
    }
  }

  async deleteAgent(request, response, next) {
    try {
      const agent = await AgentService.deleteAgent(request.params.id);
      response.status(200).json(agent);
    } catch (error) {
      next(error);
    }
  }
}

export default new AgentController();
