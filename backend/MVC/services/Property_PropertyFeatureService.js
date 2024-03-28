import { connection } from "../../bin/db.js";

import ApiError from "../../error-handler/api-error.js";

class Property_PropertyFeatureService {
  async getProperty_PropertyFeatures() {
    const query = `SELECT * FROM Property_PropertyFeature`;

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

  async getProperty_PropertyFeatureById(id) {
    if (!id) throw new ApiError("Property_PropertyFeature id is required", 400);
    const query = `SELECT * FROM Property_PropertyFeature WHERE Id = ${id}`;
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

  async addProperty_PropertyFeature(property_id, feature_id) {
    if (!property_id || !feature_id) throw new ApiError("All fields are required", 400);
    const query = `INSERT INTO Property_PropertyFeature (PropertyId, FeatureId) VALUES ('${property_id}', '${feature_id}')`;
    return new Promise((resolve, reject) => {
      connection.query(
        query,
        [property_id, feature_id],
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

  async updateProperty_PropertyFeature(id, property_id, feature_id) {
    if(!id || !property_id || !feature_id) throw new ApiError("All fields are required", 400);
    const query = `UPDATE Property_PropertyFeature SET PropertyId = ?, FeatureId = ? WHERE Id = ?`;
    return new Promise((resolve, reject) => {
      connection.query(
        query,
        [property_id, feature_id, id],
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

  async deleteProperty_PropertyFeature(id) {
    if (!id) throw new ApiError("Property_PropertyFeature id is required", 400);
    const query = `DELETE FROM Property_PropertyFeature WHERE Id = ${id}`;
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

export default new Property_PropertyFeatureService();
