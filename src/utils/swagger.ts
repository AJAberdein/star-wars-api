import express from 'express';
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Star Wars API',
      description: "Star Wars API Information from SWAPI https://swapi.dev/",
      version: '1.0.0',
      servers: ["http://localhost:3000"]
    },
  },
  apis: ['./src/routes/*.ts'],
};

export const registerSwagger = (app: express.Application): void => {
  const swaggerSpecification = swaggerJsdoc(options);
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecification));

};
