import { Person, toPersonDTO, PersonResultList } from '@server/models';
import { starWarsApi } from '@server/providers';

/**
 * Handler to get person list
 * @returns Array<Person>
 *
 * @example
 * getPersonById.handler('luke')
 * // returns Array<Person>
 */
export const getPersonList = {
  handler: async (): Promise<Array<Person>> => {
    const personResultList: PersonResultList = await starWarsApi.person.get();
    const personList: Array<Person> = personResultList.results.map((personResult) => {
      return toPersonDTO(personResult);
    });

    return personList;
  },
};
