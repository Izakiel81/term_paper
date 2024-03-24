import { connection } from "../../bin/db.js";

 
class PropertyService {

    async getProperties() {
        const query = `SELECT * FROM property`;
        const {_rows} = await connection.execute(query);
        return _rows;
    }
}


export default new PropertyService();