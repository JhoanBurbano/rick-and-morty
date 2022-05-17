import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { character } from 'src/app/modules/characters/interfaces/characters.interface';
import { loadCharacters } from 'src/app/modules/characters/store/characters.actions';
import { episode } from 'src/app/modules/episode/interfaces/episode.interface';
import { loadEpisodes } from 'src/app/modules/episode/store/episode.actions';
import { location } from 'src/app/modules/location/interfaces/location.interface';
import { loadLocations } from 'src/app/modules/location/store/location.actions';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {
  @Input() items: Array<character | episode | location | any> = [];
  @Input() type: 'character' | 'episode' | 'location' | '' = ''
  @Input() pagination: Array<{value: number, next: Array<any>}> = []
  filter:string | null= ""

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {

  }

  dispatchPage(target: any, next:any[]){

    let query = next.length ? (next.length > 1 ? (next[0] + '=' + target.value + '&' + next[1]) : (next[0] + '=' + target.value)) : 'page=' + target.value
    console.log('next', query)
    switch(location.pathname){
      case '/characters':
       return this.store.dispatch(loadCharacters({page: '?' + query}))
      case '/locations':
        return  this.store.dispatch(loadLocations({page: '?' + query}))
      case '/episodes':
        return this.store.dispatch(loadEpisodes({page: '?' + query}))
      default:
        return
    }
  }

}
