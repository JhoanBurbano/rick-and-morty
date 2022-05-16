import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { LocationService } from '../location.service';
import { getLocations, loadLocations } from './location.actions';

@Injectable()
export class LocationEffects {

    constructor(private actions: Actions, private locationServices: LocationService){}

    loadCharactersEffect = createEffect(
        ()=>this.actions.pipe(
            ofType(loadLocations),
            mergeMap(()=>this.locationServices.getLocations().pipe(
                map(response => getLocations({items: response.results, info: response.info}))
            )
            )
        )
    )
}