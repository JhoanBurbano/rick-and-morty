import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { CharactersService } from '../characters.service';
import { getCharacters, loadCharacters, showCharacters } from './characters.actions';

@Injectable()
export class CharacterEffects {

    constructor(private actions: Actions, private charactersServices: CharactersService){}

    loadCharactersEffect = createEffect(
        ()=>this.actions.pipe(
            ofType(loadCharacters),
            mergeMap(()=>this.charactersServices.getCharacters().pipe(
                map(response => getCharacters({items: response.results, info: response.info}))
            )
            )
        )
    )
}