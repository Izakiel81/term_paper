import { connection } from "../../bin/db.js";
import ApiError from "../../error-handler/api-error.js";

class AgentService {
  async getAgents() {
    const query = `SELECT * FROM agent`;
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

  async getAgentById(id) {
    if (!id) throw new ApiError("Agent id is required", 400);
    const query = `SELECT * FROM agent WHERE Id = ${id}`;
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

  async addAgent(name, email, phone) {
    if (!name || !email || !phone)
      throw new ApiError("All fields are required", 400);
    const query = `INSERT INTO agent (Name, Email, Phone) VALUES ('${name}', '${email}', '${phone}')`;
    return new Promise((resolve, reject) => {
      connection.query(query, [name, email, phone], (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  }

  async updateAgent(id, name, email, phone) {
    if (!id || !name || !email || !phone)
      throw new ApiError("All fields are required", 400);
    const query = `UPDATE agent WHERE id=${id} SET name='${name}', email='${email}', phone='${phone}'`;
    return new Promise((resolve, reject) => {
      connection.query(query, [name, email, phone], (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  }

  async deleteAgent(id) {
    if (!id) throw new ApiError("Agent id is required", 400);
    const query = `DELETE FROM agent WHERE Id = ${id}`;
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

export default new AgentService();
