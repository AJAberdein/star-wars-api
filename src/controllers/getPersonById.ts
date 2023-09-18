import {
  Person,
  PersonResult,
  Planet,
  PlanetResult,
  Species,
  SpeciesResult,
  toPersonDTO,
  toPlanetDTO,
  toSpeciesDTO,
} from '../models';
import { starWarsApi } from '../providers';

/**
 * Handler to fetch person by id from SWAPI and rendering it with a lookup on person homeworld and species
 * @param id string
 * @returns Array<Person>
 * 
 * @example
 * getPersonById.handler('1')
 * // returns Person
 */
export const getPersonById = {
  handler: async (id: string): Promise<Person> => {
    const personResult: PersonResult = await starWarsApi.person.byId(id);

    const planetResult: PlanetResult = await starWarsApi.planet.byUrl(personResult.homeworld);
    const planet: Planet = toPlanetDTO(planetResult);

    const speciesResult: Array<SpeciesResult> = await Promise.all(
      personResult.species.map(async (url) => {
        return await starWarsApi.species.byUrl(url);
      }),
    );
    const species: Array<Species> = speciesResult.map((species) => {
      return toSpeciesDTO(species);
    });

    const person: Person = toPersonDTO(personResult, planet, species);
    return person;
  },
};
