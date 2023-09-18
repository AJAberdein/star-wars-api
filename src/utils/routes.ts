import express from 'express';
import { core, api } from '../routes';

export const registerRoutes = (app: express.Application): void => {
  core(app);
  api(app);
};
