import { Application } from 'express';
import { StatusCodes } from 'http-status-codes';

export const core = (app: Application) => {
  /**
   * @swagger
   * /health:
   *  get:
   *    tags:
   *     - Core
   *    description: health route
   *    responses:
   *      '200':
   *        description: A successful response
   */
  app.get('/health', (_req, res) => {
    res.sendStatus(StatusCodes.OK);
  });
};
