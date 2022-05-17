import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { NavbarService } from 'src/app/components/navbar/navbar.service';
import { LocationService } from '../location.service';
import { getLocations, loadLocations, showLocation } from './location.actions';

@Injectable()
export class LocationEffects {

    constructor(private actions: Actions, private locationServices: LocationService, private navbarService: NavbarService){}

    loadCharactersEffect = createEffect(
        ()=>this.actions.pipe(
            ofType(loadLocations),
            mergeMap((loadLocations:any)=>this.locationServices.getLocations(loadLocations.page).pipe(
                map(response => getLocations({items: response.results, info: response.info}))
            )
            )
        )
    )

    findResultEffect = createEffect(
        ()=>this.actions.pipe(
            ofType(showLocation),
            mergeMap((showLocation:any)=>{
                return this.navbarService.filterItems(showLocation.query).pipe(
                    map( response => getLocations({items: response.results, info: response.info}) )
                )
            })
        )
    )
}