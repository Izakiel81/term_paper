import { connection } from "../../bin/db.js";
import ApiError from "../../error-handler/api-error.js";

class TransactionService {
  async getTransactions() {
    const query = `SELECT * FROM TransactionTable`;
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

  async getTransactionById(id) {
    if (!id) throw new ApiError("Transaction id is required", 400);
    const query = `SELECT * FROM TransactionTable WHERE Id = ${id}`;
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

  async addTransaction(client_id, property_id, agent_id, price) {
    if (!client_id || !property_id || !agent_id || !price)
      throw new ApiError("All fields are required", 400);
    const date = await new Date(Date.now()).toISOString().slice(0, 19).replace('T', ' ');;
    const query = `INSERT INTO TransactionTable (ClientId, PropertyId, AgentId, TransactionDate, Amount) VALUES ('${client_id}', '${property_id}', '${agent_id}',  '${date}', '${price}')`;
    return new Promise((resolve, reject) => {
      connection.query(
        query,
        [client_id, property_id, agent_id, price, date],
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

  async updateTransaction(id, client_id, property_id, agent_id, price) {
    if (!id || !client_id || !property_id || !agent_id || !price)
      throw new ApiError("All fields are required", 400);
    const query = `UPDATE TransactionTable SET ClientId=?, PropertyId=?, AgentId=?, Amount=? WHERE id=? `;
    return new Promise((resolve, reject) => {
      connection.query(
        query,
        [client_id, property_id, agent_id, price, id],
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

  async deleteTransaction(id) {
    if (!id) throw new ApiError("Transaction id is required", 400);
    const query = `DELETE FROM TransactionTable WHERE Id = ${id}`;
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

export default new TransactionService();
