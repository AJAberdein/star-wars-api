export type SpeciesResult = {
  average_height: string;
  average_lifespan: string;
  classification: string;
  created: string;
  designation: string;
  edited: string;
  eye_colors: string;
  hair_colors: string;
  homeworld: string;
  language: string;
  name: string;
  people: Array<string>;
  films: Array<string>;
  skin_colors: string;
  url: string;
};

export type Species = {
  name: string;
  average_height: string;
  average_lifespan: string;
  classification: string;
  designation: string;
  eye_colors: string;
  hair_colors: string;
  language: string;
  skin_colors: string;
};

export const toSpeciesDTO = (result: SpeciesResult): Species => {
  const personDTO: Species = {
    name: result.name,
    average_height: result.average_height,
    average_lifespan: result.average_lifespan,
    classification: result.classification,
    designation: result.designation,
    eye_colors: result.eye_colors,
    hair_colors: result.hair_colors,
    language: result.language,
    skin_colors: result.skin_colors,
  };
  return personDTO;
};
