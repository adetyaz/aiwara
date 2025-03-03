export interface Event {
  name: string;
  description: string;
}

export interface Landmark {
  name: string;
  description: string;
  image: string;
  story: string;
}

export interface Food {
  name: string;
  description: string;
  image: string;
  story: string;
}

export interface Drink {
  name: string;
  description: string;
  image: string;
  story: string;
}

export interface Region {
  region: string;
  story: string;
  humor: string;
  comedicStyle: string;
  events: Event[];
  landmarks: Landmark[];
  foods: Food[];
  drinks: Drink[];
}

export type RegionsData = Region[];

export interface NavLink {
  name: string;
  link: string;
}
