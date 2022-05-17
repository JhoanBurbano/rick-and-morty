import { createAction, props } from "@ngrx/store";
import { info } from "src/app/interfaces/store.interface";
import { location } from "../interfaces/location.interface";

export const loadLocations = createAction('[Load Locations]', props<{page: string}>());
export const getLocations = createAction('[Get Locations]', props<{items: Array<location>, info: info}>());
export const showLocation = createAction('[Show Location]', props<{query: string}>());