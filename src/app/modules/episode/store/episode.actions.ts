import { createAction, props } from "@ngrx/store";
import { info } from "src/app/interfaces/store.interface";
import { episode } from "../interfaces/episode.interface";

export const loadEpisodes = createAction('[Load Episodes]', props<{page: string}>());
export const getEpisodes = createAction('[Get Episodes]', props<{items: Array<episode>, info:info}>());
export const showEpisodes = createAction('[Show Episodes]', props<{query: string}>());
