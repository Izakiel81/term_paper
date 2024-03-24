import { connection } from "../../bin/db.js";

 
class PropertyService {

    async getProperties() {
        const query = `SELECT * FROM property`;
        const {_rows} = await connection.execute(query);
        return _rows;
    }

    async getPropertyById(id){
        const query = `SELECT * FROM property WHERE Id = ${id}`;
        const {_rows} = await connection.execute(query);
        return _rows[0];
    }

    async addProperty(address, type, price, status) {
        const query = `INSERT INTO property (Address, Type, Price, Status) VALUES ('${address}', '${type}', '${price}', '${status}')`;
        const {_rows} = await connection.execute(query);
        return _rows;
    }

    async updateProperty(id, address, type, price, status) {
        const query = `UPDATE property SET Address = '${address}', Type = '${type}', Price = '${price}', Status = '${status}' WHERE Id = ${id}`;
        const {_rows} = await connection.execute(query);
        return _rows;
    }

    async deleteProperty(id) {
        const query = `DELETE FROM property WHERE Id = ${id}`;
        const {_rows} = await connection.execute(query);
        return _rows;
    }
}


export default new PropertyService();