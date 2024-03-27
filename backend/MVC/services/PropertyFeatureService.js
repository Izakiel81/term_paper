import { connection } from "../../bin/db.js";

import ApiError from "../../error-handler/api-error.js";

class PropertyFeatureService {
  async getPropertyFeatures() {
    const query = `SELECT * FROM PropertyFeature`;
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

  async getPropertyFeatureById(id) {
    if (!id) throw new ApiError("Property Feature id is required", 400);
    const query = `SELECT * FROM PropertyFeature WHERE Id = ${id}`;
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

  async addPropertyFeature(feature) {
    if (!feature) throw new ApiError("Property Feature is required", 400);
    const query = `INSERT INTO PropertyFeature (Feature) VALUES ('${feature}')`;
    return new Promise((resolve, reject) => {
      connection.query(query, [feature], (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  }
  async updatePropertyFeature(id, feature) {
    if (!id || !feature) throw new ApiError("All fields are required", 400);
    const query = `UPDATE PropertyFeature SET Feature = '${feature}' WHERE Id = ${id}`;
    return new Promise((resolve, reject) => {
      connection.query(query, [id, feature], (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  }

  async deletePropertyFeature(id) {
    if (!id) throw new ApiError("Property Feature id is required", 400);
    const query = `DELETE FROM PropertyFeature WHERE Id = ${id}`;
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

export default new PropertyFeatureService();
