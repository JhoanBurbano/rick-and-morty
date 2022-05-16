import { characterState } from "../modules/characters/interfaces/characters.interface";
import { episodeState } from "../modules/episode/interfaces/episode.interface";
import { locationState } from "../modules/location/interfaces/location.interface";

export interface store {
  characters: characterState;
  locations: locationState;
  episode: episodeState;
}

export interface info {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}
