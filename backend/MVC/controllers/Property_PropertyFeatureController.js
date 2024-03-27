import Property_PropertyFeatureService from "../services/Property_PropertyFeatureService.js";

class Property_PropertyFeatureController{
    async getProperty_PropertyFeatures(request, response, next) {
        try {
            const property_PropertyFeatures = await Property_PropertyFeatureService.getProperty_PropertyFeatures();
            return response.status(200).json(property_PropertyFeatures);
        } catch (err) {
            next(err);
        }
    }

    async getProperty_PropertyFeatureById(request, response, next) {
        try {
            const { id } = request.params;
            const property_PropertyFeature = await Property_PropertyFeatureService.getProperty_PropertyFeatureById(id);
            return response.status(200).json(property_PropertyFeature);
        } catch (err) {
            next(err);
        }
    }

    async addProperty_PropertyFeature(request, response, next) {
        try {
            const { propertyId, featureId } = request.body;
            const property_PropertyFeature = await Property_PropertyFeatureService.addProperty_PropertyFeature(propertyId, featureId);
            return response.status(201).json(property_PropertyFeature);
        } catch (err) {
            next(err);
        }
    }

    async updateProperty_PropertyFeature(request, response, next) {
        try {
            const { id } = request.params;
            const { propertyId, featureId } = request.body;
            const property_PropertyFeature = await Property_PropertyFeatureService.updateProperty_PropertyFeature(id, propertyId, featureId);
            return response.status(200).json(property_PropertyFeature);
        } catch (err) {
            next(err);
        }
    }

    async deleteProperty_PropertyFeature(request, response, next) {
        try {
            const { id } = request.params;
            const property_PropertyFeature = await Property_PropertyFeatureService.deleteProperty_PropertyFeature(id);
            return response.status(200).json(property_PropertyFeature);
        } catch (err) {
            next(err);
        }
    }
}

export default new Property_PropertyFeatureController();