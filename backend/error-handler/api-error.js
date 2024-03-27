class ApiError extends Error {
    constructor(message, status, errors) {
      super(message);
      this.status = status;
      this.errors = errors;
    }
  
    static UnauthorizedError() {
      return new ApiError('User is not authorized', 401);
    }
  
    static BadRequest(message, errors = []) {
      return new ApiError(message, 400, errors);
    }
    static NotFound(message, errors = []) {
      return new ApiError(message, 404, errors);
    }
    static NotEnoughFields(message, errors = []) {
      return new ApiError(message, 422, errors);
    }
  }
  
  export default ApiError;