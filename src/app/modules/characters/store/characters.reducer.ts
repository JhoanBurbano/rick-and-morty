import { createReducer, on } from '@ngrx/store';
import { character, characterState } from '../interfaces/characters.interface';
import { getCharacters } from './characters.actions'

export const initialState: characterState = {
    items: [],
    info: {},
}

export const characterReducer = createReducer(
    initialState,
    on(getCharacters, (state, {items, info}) => ({...state, items: [...items], info})),
  );