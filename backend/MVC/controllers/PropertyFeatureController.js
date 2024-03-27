import PropertyFeatureService from "../services/PropertyFeatureService.js";

class PropertyFeatureController {
  async getPropertyFeatures(request, response, next) {
    try {
      const propertyFeatures =
        await PropertyFeatureService.getPropertyFeatures();
      return response.status(200).json(propertyFeatures);
    } catch (err) {
      next(err);
    }
  }

  async getPropertyFeatureById(request, response, next) {
    try {
      const { id } = request.params;
      const propertyFeature =
        await PropertyFeatureService.getPropertyFeatureById(id);
      return response.status(200).json(propertyFeature);
    } catch (err) {
      next(err);
    }
  }

  async addPropertyFeature(request, response, next) {
    try {
      const { feature } = request.body;
      const propertyFeature = await PropertyFeatureService.addPropertyFeature(
        feature
      );
      return response.status(201).json(propertyFeature);
    } catch (err) {
      next(err);
    }
  }

  async updatePropertyFeature(request, response, next) {
    try {
      const { id } = request.params;
      const { feature } = request.body;
      const propertyFeature =
        await PropertyFeatureService.updatePropertyFeature(id, feature);
      return response.status(200).json(propertyFeature);
    } catch (err) {
      next(err);
    }
  }

  async deletePropertyFeature(request, response, next) {
    try {
      const propertyFeature =
        await PropertyFeatureService.deletePropertyFeature(request.params.id);
      return response.status(200).json(propertyFeature);
    } catch (err) {
      next(err);
    }
  }
}

export default new PropertyFeatureController();
