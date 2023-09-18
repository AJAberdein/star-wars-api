import { SWAPI_BASE_URL } from '../../config';
import { PersonResult, PersonResultList, PlanetResult, SpeciesResult } from '../../models';
import axios from 'axios';

/**
 * Star Wars API Rest Client
 * @module providers/api/sw-api-request
 */
export const starWarsApi = {
  /**
   * Person API
   * @module providers/api/sw-api-request
   */
  person: {
    /**
     * Get all people
     * @param page string
     * @returns PersonResultList
     */
    get: async (page?: string): Promise<PersonResultList> => {
      const pager = page ? `?page=${page}` : '';
      const { data } = await axios.get<PersonResultList>(`${SWAPI_BASE_URL}/people/${pager}`);
      return data;
    },
    /**
     * Get person by id
     * @param id string
     * @returns PersonResult
     */
    byId: async (id: string): Promise<PersonResult> => {
      const { data } = await axios.get<PersonResult>(`${SWAPI_BASE_URL}/people/${id}`);
      return data;
    },
    /**
     * Search person by name
     * @param name string
     * @param page string
     */
    searchByName: async (name: string, page?: string): Promise<PersonResultList> => {
      const pager = page ? `&page=${page}` : '';
      const { data } = await axios.get<PersonResultList>(`${SWAPI_BASE_URL}/people/?search=${name}${pager}`);
      return data;
    },
  },

  /**
   * Planet API
   * @module providers/api/sw-api-request
   */
  planet: {
    /**
     * Get planet by url
     * @param url string
     * @returns PlanetResult
     */
    byUrl: async (url: string): Promise<PlanetResult> => {
      const { data } = await axios.get<PlanetResult>(`${url}`);
      return data;
    },
  },
  /**
   * Species API
   * @module providers/api/sw-api-request
   */
  species: {
    /**
     * Get species by url
     * @param url string
     * @returns SpeciesResult
     */
    byUrl: async (url: string): Promise<SpeciesResult> => {
      const { data } = await axios.get<SpeciesResult>(`${url}`);
      return data;
    },
  },
};
