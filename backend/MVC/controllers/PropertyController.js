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
}

export default new PropertyController();
