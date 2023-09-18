import { Person } from '../models';
import { getPersonById } from '../controllers/getPersonById';
import { Application, Request, Response } from 'express';
import { searchPersonByName } from '@server/controllers/searchPersonByName';
import { getPersonList } from '@server/controllers/getPersonList';

export const api = (app: Application) => {
  /**
   * @swagger
   * components:
   *   schemas:
   *     Person:
   *       allOf:
   *         - type: object
   *           properties:
   *             name:
   *               type: string
   *               description: character name.
   *               example: Luke Skywalker
   *             birth_year:
   *               type: string
   *               description: character birth year.
   *               example: 19BBY
   */

  /**
   * @swagger
   * /people:
   *   get:
   *     tags:
   *      - People
   *     summary: Retrieve a list of Star Wars characters.
   *     description: Retrieve a list of characters of allows to search for characters by query paramater.
   *     parameters:
   *       - in: query
   *         name: name
   *         required: false
   *         description: Name of character to search by, eg. luke, r2.
   *         schema:
   *           type: string
   *     responses:
   *       200:
   *         description: A list of users.
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/Person'
   */
  app.get('/people', async (req: Request, res: Response) => {
    if (req.query && req.query.search) {
      const query: string = req.query.search as string;
      const personQuery: Array<Person> = await searchPersonByName.handler(query);
      res.send(personQuery);
    }

    const personList: Array<Person> = await getPersonList.handler();
    res.send(personList);
  });

  /**
   * @swagger
   * /people/{id}:
   *   get:
   *     tags:
   *      - People
   *     summary: Retreives star wars character by id.
   *     description: Retrieves a Star Wars character with homeworld planet and species.
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         description: Numeric ID of the person to retrieve.
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: A Star Wars character.
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Person'
   */
  app.get('/people/:id', async (req: Request, res: Response) => {
    const person: Person = await getPersonById.handler(req.params.id);

    res.send(person);
  });
};
