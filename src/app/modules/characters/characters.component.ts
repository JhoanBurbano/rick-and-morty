import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { info } from 'src/app/interfaces/store.interface';
import { loadEpisodes } from '../episode/store/episode.actions';
import { loadLocations } from '../location/store/location.actions';
import { character } from './interfaces/characters.interface';
import { loadCharacters } from './store/characters.actions';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  characters:Array<character>=[]
  info: any;
  constructor(
    private store: Store
  ) { 
  }
  

  
  ngOnInit(): void {
    this.callStore()
  }

  callStore () {
    this.store.dispatch(loadCharacters())
    this.store.dispatch(loadEpisodes())
    this.store.dispatch(loadLocations())
    this.store.pipe(select((state: any)=>state.characters)).subscribe((char)=>{this.characters=char.items, this.info = char.info})
  }

}
