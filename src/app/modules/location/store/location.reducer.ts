import { createReducer, on } from '@ngrx/store';
import { location, locationState } from '../interfaces/location.interface';
import { getLocations } from './location.actions'

export const initialState: locationState = {
    items: [],
    info: {}
}
export const locationReducer = createReducer(
    initialState,
    on(getLocations, (state, {items, info}) => ({...state, items: [...items], info}))
  );