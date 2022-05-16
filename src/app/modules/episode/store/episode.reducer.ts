import { createReducer, on } from '@ngrx/store';
import { episode, episodeState } from '../interfaces/episode.interface';
import { getEpisodes} from './episode.actions'

export const initialState: episodeState = {
    items: [],
    info: {}
}
export const episodeReducer = createReducer(
    initialState,
    on(getEpisodes, (state, {items, info}) => ({...state, items: [...items], info}))
  );