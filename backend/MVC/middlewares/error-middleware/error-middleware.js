import ApiError from "../../../error-handler/api-error.js";

const errorMiddleware = (err, req, res, next) => {
    if(err instanceof ApiError){
        return res.status(err.status).json({message: err.message, errors: err.errors});
    }
    return res.status(500).json({message: err.message || "Unexpected error"});
}

export default errorMiddleware;