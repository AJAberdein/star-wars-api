import express from 'express';
import { registerRoutes, registerSwagger } from './utils';

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || '3000';

const app: express.Application = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

registerRoutes(app);
registerSwagger(app);

app.listen(port, () => {
  console.log(`server listening on ${host}:${port}`);
});

export default app;