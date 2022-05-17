import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { showCharacters } from 'src/app/modules/characters/store/characters.actions';
import { showEpisodes } from 'src/app/modules/episode/store/episode.actions';
import { showLocation } from 'src/app/modules/location/store/location.actions';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
  }


  filterArrays(strFilter: string){
    switch(location.pathname){
      case '/characters':
      return this.store.dispatch(showCharacters({query: location.pathname.slice(1, location.pathname.length-1) + '/?name=' + strFilter}))
      case '/episodes':
      return this.store.dispatch(showEpisodes({query: location.pathname.slice(1, location.pathname.length-1) + '/?name=' + strFilter}))
      case '/locations':
      return this.store.dispatch(showLocation({query: location.pathname.slice(1, location.pathname.length-1) + '/?name=' + strFilter}))

    }
  }

}
