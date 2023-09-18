import { Species } from './species';
import { Planet } from './planet';

export type PersonResult = {
  birth_year: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  created: string;
  edited: string;
  species: Array<string>;
  starships: string[];
  url: string;
  vehicles: string[];
};

export type PersonResultList = {
  count: number;
  next: string;
  previous: string;
  results: Array<PersonResult>;
};

export type Person = {
  name: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  homeworld?: Planet;
  species?: Array<Species>;
};

export const toPersonDTO = (result: PersonResult, planet?: Planet, species?: Array<Species>): Person => {
  const personDTO: Person = {
    name: result.name,
    birth_year: result.birth_year,
    eye_color: result.eye_color,
    gender: result.gender,
    hair_color: result.hair_color,
    height: result.height,
    homeworld: planet,
    mass: result.mass,
    skin_color: result.skin_color,
    species: species,
  };
  return personDTO;
};
