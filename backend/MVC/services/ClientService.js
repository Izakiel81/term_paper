import { connection } from "../../bin/db.js";
import ApiError from "../../error-handler/api-error.js";
class ClientService {
  async getClients() {
    const query = `SELECT * FROM client`;
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
  async getClientById(id) {
    if (!id) throw new ApiError("Client id is required", 400);
    const query = `SELECT * FROM client WHERE Id = ${id}`;
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

  async addClient(name, email, phone) {
    if (!name || !email || !phone)
      throw new ApiError("All fields are required", 400);
    const query = `INSERT INTO client (Name, Email, Phone) VALUES ('${name}', '${email}', '${phone}')`;
    return new Promise((resolve, reject) => {
      connection.query(
        query,
        [name, email, phone],
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

  async updateClient(id, name, email, phone) {
    if (!id || !name || !email || !phone)
      throw new ApiError("All fields are required", 400);
    const query = `UPDATE client SET Name = '${name}', Email = '${email}', Phone = '${phone}' WHERE Id = ${id}`;
    return new Promise((resolve, reject) => {
      connection.query(
        query,
        [name, email, phone, id],
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

  async deleteClient(id) {
    if (!id) throw new ApiError("Client id is required", 400);
    const query = `DELETE FROM client WHERE Id = ${id}`;
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

export default new ClientService();
