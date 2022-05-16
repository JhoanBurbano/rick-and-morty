import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { info, store } from 'src/app/interfaces/store.interface';
import { episode } from './interfaces/episode.interface';
import { loadEpisodes } from './store/episode.actions';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent implements OnInit {
  
  episodes: Array<episode> = [];
  info: {} = {};

  constructor(private store:Store) { }

  ngOnInit(): void {
    this.store.dispatch(loadEpisodes())
    this.store.pipe(select((state:any)=> state.episodes)).subscribe((epi)=>{this.episodes = epi.items, this.info = epi.info})
  }

}
