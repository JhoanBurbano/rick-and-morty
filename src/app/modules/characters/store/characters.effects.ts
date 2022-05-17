import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { NavbarService } from 'src/app/components/navbar/navbar.service';
import { CharactersService } from '../characters.service';
import { getCharacters, loadCharacters, showCharacters } from './characters.actions';

@Injectable()
export class CharacterEffects {

    constructor(private actions: Actions, private charactersServices: CharactersService, private navbarService: NavbarService){}

    loadCharactersEffect = createEffect(
        ()=>this.actions.pipe(
            ofType(loadCharacters),
            mergeMap((loadCharacters: any)=>this.charactersServices.getCharacters(loadCharacters.page).pipe(
                map(response => getCharacters({items: response.results, info: response.info}))
            )
            )
        )
    )

    findResultEffect = createEffect(
        ()=>this.actions.pipe(
            ofType(showCharacters),
            mergeMap((showCharacters:any)=>{
                return this.navbarService.filterItems(showCharacters.query).pipe(
                    map( response => getCharacters({items: response.results, info: response.info}) )
                )
            })
        )
    )
}