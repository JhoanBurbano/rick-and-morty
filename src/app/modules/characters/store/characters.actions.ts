import { createAction, props } from "@ngrx/store";
import { character } from "../interfaces/characters.interface";

export const loadCharacters = createAction('[Load Characters]');
export const getCharacters = createAction('[Get Characters]', props<{items: Array<character>, info: {}}>());
export const showCharacters = createAction('[Show Characters]', props<{query: string}>());
