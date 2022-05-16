import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { EpisodeService } from '../episode.service';
import { getEpisodes, loadEpisodes } from './episode.actions';

@Injectable()
export class EpisodeEffects {

    constructor(private actions: Actions, private episodeServices: EpisodeService){}

    loadEpisodesEffect = createEffect(
        ()=>this.actions.pipe(
            ofType(loadEpisodes),
            mergeMap(()=>this.episodeServices.getEpisodes().pipe(
                map(response => getEpisodes({items: response.results, info: response.info}))
            )
            )
        )
    )
}