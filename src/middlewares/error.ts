import { RequestHandler, Request, Response, NextFunction } from "express";
import { validationResult, Result, ValidationError } from "express-validator";
import { CustomError } from "../utils/error";

export function logErrors(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  console.error(err);
  next(err);
}

export function ValidationHandler(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const errors: Result<ValidationError> = validationResult(req);

  if (errors.isEmpty()) {
    next();
    return;
  }

  res.status(400).send({ message: errors.array()[0].msg });
}

export function clientErrorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  if (err instanceof CustomError) {
    res.status(err.status).send({ message: err.message });
    return;
  }

  next(err);
}

export function serverErrorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  res.status(600).send({ message: err.message });
}
