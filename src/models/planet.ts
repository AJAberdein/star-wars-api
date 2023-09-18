export type PlanetResult = {
  climate: string;
  created: string;
  diameter: string;
  edited: string;
  films: Array<string>;
  gravity: string;
  name: string;
  orbital_period: string;
  population: string;
  residents: Array<string>;
  rotation_period: string;
  surface_water: string;
  terrain: string;
  url: string;
};

export type Planet = {
  name: string;
  climate: string;
  diameter: string;
  gravity: string;
  orbital_period: string;
  population: string;
  surface_water: string;
  terrain: string;
};

export const toPlanetDTO = (result: PlanetResult): Planet => {
  const personDTO: Planet = {
    name: result.name,
    climate: result.climate,
    diameter: result.diameter,
    gravity: result.gravity,
    orbital_period: result.orbital_period,
    population: result.population,
    surface_water: result.surface_water,
    terrain: result.terrain,
  };
  return personDTO;
};
