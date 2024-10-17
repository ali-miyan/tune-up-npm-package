import { Request, Response, NextFunction } from "express";
import { BadRequestError, NotFoundError, UnauthorizedError } from "./errorHandlers";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {

  let statusCode = 500;
  let errorMessage = "Internal Server Error";

  if (err instanceof BadRequestError) {
    statusCode = 400;
    errorMessage = err.message;
  } else if (err instanceof NotFoundError) {
    statusCode = 404;
    errorMessage = "Not Found";
  } else if (err instanceof UnauthorizedError) {
    statusCode = 401;
    errorMessage = "Unauthorized";
  }

  res.status(statusCode).json({ error: errorMessage });
};
