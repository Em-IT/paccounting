import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { StatusCodes } from "http-status-codes";
import { capsulateData } from "./apiTools";

export const processedValidationResult = (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorsStr = errors
      .array()
      .map(e => e.msg)
      .join(", ");

    return res
      .status(StatusCodes.BAD_REQUEST)
      .json(capsulateData(null, errorsStr));
  }
  return null;
};