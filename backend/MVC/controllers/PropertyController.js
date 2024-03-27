import PropertyService from "../services/PropertyService.js";

class PropertyController {
  async getProperties(request, response, next) {
    try {
      const properties = await PropertyService.getProperties();
      return response.status(200).json(properties);
    } catch (err) {
      next(err);
    }
  }

  async getPropertyById(request, response, next) {
    try {
      const { id } = request.params;
      const property = await PropertyService.getPropertyById(id);
      return response.status(200).json(property);
    } catch (err) {
      next(err);
    }
  }

  async addProperty(request, response, next) {
    try {
      const { address, type, price, status } = request.body;
      const property = await PropertyService.addProperty(
        address,
        type,
        price,
        status
      );
      return response.status(201).json(property);
    } catch (err) {
      next(err);
    }
  }

  async updateProperty(request, response, next) {
    try {
      const { id } = request.params;
      const { address, type, price, status } = request.body;
      const property = await PropertyService.updateProperty(
        id,
        address,
        type,
        price,
        status
      );
      return response.status(200).json(property);
    } catch (err) {
      next(err);
    }
  }

  async deleteProperty(request, response, next) {
    try {
      const { id } = request.params;
      const property = await PropertyService.deleteProperty(id);
      return response.status(200).json(property);
    } catch (err) {
      next(err);
    }
  }
}

export default new PropertyController();
