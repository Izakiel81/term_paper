import PropertyImageService from "../services/PropertyImageService.js";

class PropertyImageController {
  async getPropertyImages(request, response, next) {
    try {
      const propertyImages = await PropertyImageService.getPropertyImages();
      return response.status(200).json(propertyImages);
    } catch (err) {
      next(err);
    }
  }
  async getPropertyImageById(request, response, next) {
    try {
      const { id } = request.params;
      const propertyImage = await PropertyImageService.getPropertyImageById(id);
      return response.status(200).json(propertyImage);
    } catch (err) {
      next(err);
    }
  }

  async getPropertyImageByPropertyId(request, response, next) {
    try {
      const { propertyId } = request.params;
      const propertyImage = await PropertyImageService.getPropertyImageByPropertyId(
        propertyId
      );
      return response.status(200).json(propertyImage);
    } catch (err) {
      next(err);
    }
  }
  async addPropertyImage(request, response, next) {
    try {
      const { propertyId, image } = request.body;
      const propertyImage = await PropertyImageService.addPropertyImage(
        propertyId,
        image
      );
      return response.status(201).json(propertyImage);
    } catch (err) {
      next(err);
    }
  }

  async updatePropertyImage(request, response, next) {
    try {
      const { id } = request.params;
      const { propertyId, image } = request.body;
      const propertyImage = await PropertyImageService.updatePropertyImage(
        id,
        propertyId,
        image
      );
      return response.status(200).json(propertyImage);
    } catch (err) {
      next(err);
    }
  }

  async deletePropertyImage(request, response, next) {
    try {
      const { id } = request.params;
      await PropertyImageService.deletePropertyImage(id);
      return response.status(204).json();
    } catch (err) {
      next(err);
    }
  }
}
export default new PropertyImageController();
