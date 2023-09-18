import { Person, toPersonDTO, PersonResultList } from '@server/models';
import { starWarsApi } from '@server/providers';

/**
 * Handler to seaerch person list by name query from SWAPI
 * @param name string
 * @returns Person
 *
 * @example
 * getPersonById.handler('luke')
 * // returns Array<Person>
 */
export const searchPersonByName = {
  handler: async (name: string): Promise<Array<Person>> => {
    const personResultList: PersonResultList = await starWarsApi.person.searchByName(name);
    const personList: Array<Person> = personResultList.results.map((personResult) => {
      return toPersonDTO(personResult);
    });
    return personList;
  },
};
