import { connection } from "../../bin/db.js";

import ApiError from "../../error-handler/api-error.js";

class PropertyImageService{
    async getPropertyImages() {
        const query = `SELECT * FROM PropertyImage`;

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

    async getPropertyImageById(id) {
        if (!id) throw new ApiError("PropertyImage id is required", 400);
        const query = `SELECT * FROM PropertyImage WHERE Id = ${id}`;
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

    async addPropertyImage(property_id, image_url) {
        if (!property_id || !image_url) throw new ApiError("All fields are required", 400);
        const query = `INSERT INTO PropertyImage (PropertyId, ImageUrl) VALUES ('${property_id}', '${image_url}')`;
        return new Promise((resolve, reject) => {
            connection.query(
                query,
                [property_id, image_url],
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

    async updatePropertyImage(id, property_id, image_url) {
        if(!id || !property_id || !image_url) throw new ApiError("All fields are required", 400);
        const query = `UPDATE PropertyImage SET PropertyId = '${property_id}', ImageUrl = '${image_url}' WHERE Id = ${id}`;
        return new Promise((resolve, reject) => {
            connection.query(
                query,
                [property_id, image_url, id],
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

    async deletePropertyImage(id) {
        if (!id) throw new ApiError("PropertyImage id is required", 400);
        const query = `DELETE FROM PropertyImage WHERE Id = ${id}`;
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

export default new PropertyImageService();