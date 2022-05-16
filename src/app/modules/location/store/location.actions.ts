import { createAction, props } from "@ngrx/store";
import { info } from "src/app/interfaces/store.interface";
import { location } from "../interfaces/location.interface";

export const loadLocations = createAction('[Load Locations]');
export const getLocations = createAction('[Get Locations]', props<{items: Array<location>, info: info}>());