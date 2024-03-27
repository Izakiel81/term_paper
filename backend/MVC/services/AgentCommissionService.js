import { connection } from "../../bin/db.js";
import ApiError from "../../error-handler/api-error.js";

class AgentCommissionService {
  async getAgentCommissions() {
    const query = `SELECT * FROM AgentCommission`;

    return new Promise((resolve, reject) => {
      connection.query(query, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  }

  async getAgentCommissionById(id) {
    if (!id) throw new ApiError("AgentCommission id is required", 400);
    const query = `SELECT * FROM AgentCommission WHERE Id = ${id}`;
    return new Promise((resolve, reject) => {
      connection.query(query, [id], (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result.length ? result[0] : null);
        }
      });
    });
  }
  async addAgentCommission(agent_id, transaction_id, commission) {
    if (!agent_id || !transaction_id || !commission)
      throw new ApiError("All fields are required", 400);
    const query = `INSERT INTO AgentCommission (AgentId, TransactionId, Commission) VALUES ('${agent_id}', '${transaction_id}', '${commission}')`;
    return new Promise((resolve, reject) => {
      connection.query(
        query,
        [agent_id, transaction_id, commission],
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        }
      );
    });
  }

  async updateAgentCommission(id, agent_id, transaction_id, commission) {
    if (!id) throw new ApiError("AgentCommission id is required", 400);
    if (!agent_id || !transaction_id || !commission)
      throw new ApiError("All fields are required", 400);
    const query = `UPDATE AgentCommission SET AgentId = '${agent_id}', TransactionId = '${transaction_id}', Commission = '${commission}' WHERE Id = ${id}`;
    return new Promise((resolve, reject) => {
      connection.query(
        query,
        [agent_id, transaction_id, commission, id],
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        }
      );
    });
  }

  async deleteAgentCommission(id) {
    if (!id) throw new ApiError("AgentCommission id is required", 400);
    const query = `DELETE FROM AgentCommission WHERE Id = ${id}`;
    return new Promise((resolve, reject) => {
      connection.query(query, [id], (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  }
}

export default new AgentCommissionService();
