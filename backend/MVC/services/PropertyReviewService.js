import { connection } from "../../bin/db.js";

import ApiError from "../../error-handler/api-error.js";

class PropertyReviewService {
  async getPropertyReviews() {
    const query = `SELECT * FROM PropertyReview`;

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

  async getPropertyReviewById(id) {
    if (!id) throw new ApiError("PropertyReview id is required", 400);
    const query = `SELECT * FROM PropertyReview WHERE Id = ${id}`;
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

  async addPropertyReview(property_id, client_id, rating, review_text) {
    if (!property_id || !client_id || !rating || !review_text)
      throw new ApiError("All fields are required", 400);
    const query = `INSERT INTO PropertyReview (PropertyId, ClientId, Rating, ReviewText) VALUES ('${property_id}', '${client_id}','${rating}','${review_text}')`;
    return new Promise((resolve, reject) => {
      connection.query(
        query,
        [property_id, client_id, rating, review_text],
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

  async updatePropertyReview(id, property_id, client_id, rating, review_text) {
    if (!id || !property_id || !client_id || !rating || !review_text)
      throw new ApiError("All fields are required", 400);
    const query = `UPDATE PropertyReview SET PropertyId = '${property_id}', ClientId = '${client_id}', Rating = '${rating}', ReviewText = '${review_text}' WHERE Id = ${id}`;
    return new Promise((resolve, reject) => {
      connection.query(
        query,
        [property_id, client_id, rating, review_text, id],
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

  async deletePropertyReview(id) {
    if (!id) throw new ApiError("PropertyReview id is required", 400);
    const query = `DELETE FROM PropertyReview WHERE Id = ${id}`;
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

export default new PropertyReviewService();
