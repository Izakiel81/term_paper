import { connection } from "../../bin/db.js";
import ApiError from "../../error-handler/api-error.js";

class PropertyService {
  async getProperties() {
    const query = `SELECT * FROM property`;

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

  async getPropertyById(id) {
    if (!id) throw new ApiError("Property id is required", 400);
    const query = `SELECT * FROM property WHERE Id = ?`;

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

  async addProperty(address, type, price, status) {
    if (!address || !type || !price || !status)
      throw new ApiError("All fields are required", 400);
    const query = `INSERT INTO property (Address, Type, Price, Status) VALUES (?, ?, ?, ?)`;

    return new Promise((resolve, reject) => {
      connection.query(
        query,
        [address, type, price, status],
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

  async updateProperty(id, address, type, price, status) {
    if (!id || !address || !type || !price || !status)
      throw new ApiError("All fields are required", 400);
    const query = `UPDATE property SET Address = ${address}, Type = ${type}, Price = ${price}, Status = ${price} WHERE Id = ${id}`;

    return new Promise((resolve, reject) => {
      connection.query(
        query,
        [address, type, price, status, id],
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

  async deleteProperty(id) {
    if (!id) throw new ApiError("Property id is required", 400);
    const query = `DELETE FROM property WHERE Id = ?`;

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

export default new PropertyService();
