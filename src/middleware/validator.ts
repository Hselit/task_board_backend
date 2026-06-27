import { Request, Response, NextFunction } from "express";

import { ZodObject } from "zod";

export const validate = <T extends ZodObject>(schema: T) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse({
      body: req.body,
      params: req.params,
      query: req.query,
    });

    if (!result.success) {
      console.log(result.error);
      return res.status(400).json(result.error.flatten());
    }
    Object.assign(req, result.data);
    next();
  };
};