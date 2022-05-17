import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { NavbarService } from 'src/app/components/navbar/navbar.service';
import { EpisodeService } from '../episode.service';
import { getEpisodes, loadEpisodes, showEpisodes } from './episode.actions';

@Injectable()
export class EpisodeEffects {

    constructor(private actions: Actions, private episodeServices: EpisodeService, private navbarService: NavbarService){}

    loadEpisodesEffect = createEffect(
        ()=>this.actions.pipe(
            ofType(loadEpisodes),
            mergeMap((loadEpisodes:any)=>this.episodeServices.getEpisodes(loadEpisodes.page).pipe(
                map(response => getEpisodes({items: response.results, info: response.info}))
            )
            )
        )
    )

    findResultEffect = createEffect(
        ()=>this.actions.pipe(
            ofType(showEpisodes),
            mergeMap((showEpisodes:any)=>{
                return this.navbarService.filterItems(showEpisodes.query).pipe(
                    map( response => getEpisodes({items: response.results, info: response.info}) )
                )
            })
        )
    )
}