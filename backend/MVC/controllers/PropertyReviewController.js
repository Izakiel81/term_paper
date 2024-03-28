import PropertyReviewService from "../services/PropertyReviewService.js";

class PropertyReviewController {
  async getPropertyReviews(request, response, next) {
    try {
      const propertyReviews = await PropertyReviewService.getPropertyReviews();
      return response.status(200).json(propertyReviews);
    } catch (err) {
      next(err);
    }
  }

  async getPropertyReviewById(request, response, next) {
    try {
      const { id } = request.params;
      const propertyReview = await PropertyReviewService.getPropertyReviewById(
        id
      );
      return response.status(200).json(propertyReview);
    } catch (err) {
      next(err);
    }
  }

  async getPropertyReviewByPropertyId(request, response, next) {
    try {
      const { propertyId } = request.params;
      const propertyReview = await PropertyReviewService.getPropertyReviewByPropertyId(
        propertyId
      );
      return response.status(200).json(propertyReview);
    } catch (err) {
      next(err);
    }
  }
  async addPropertyReview(request, response, next) {
    try {
      const { propertyId, clientId, rating, reviewText } = request.body;
      const propertyReview = await PropertyReviewService.addPropertyReview(
        propertyId,
        clientId,
        rating,
        reviewText
      );
      return response.status(201).json(propertyReview);
    } catch (err) {
      next(err);
    }
  }

  async updatePropertyReview(request, response, next) {
    try {
      const { id } = request.params;
      const { propertyId, clientId, rating, reviewText } = request.body;
      const propertyReview = await PropertyReviewService.updatePropertyReview(
        id,
        propertyId,
        clientId,
        rating,
        reviewText
      );
      return response.status(200).json(propertyReview);
    } catch (err) {
      next(err);
    }
  }

  async deletePropertyReview(request, response, next) {
    try {
      const { id } = request.params;
      const propertyReview = await PropertyReviewService.deletePropertyReview(
        id
      );
      return response.status(204).json(propertyReview);
    } catch (err) {
      next(err);
    }
  }
}
export default new PropertyReviewController();
