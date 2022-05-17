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
  pagination: Array<{value:number, next: Array<any>}> = [];

  constructor(private store:Store) { }

  ngOnInit(): void {
    this.store.dispatch(loadEpisodes({ page: "?pages=1&name=" }))
    this.store.pipe(select((state:any)=> state.episodes)).subscribe((epi)=>{this.episodes = epi.items, this.pagination =  Array(epi.info.pages).fill(0).map((x,i)=>({value: i+1, next: epi.info.next?((epi.info.next.split('?')[1]).split('&')).map((ele:string) => { let result = ele.split('=')[0]; if(ele.includes('name')){ result = ele};  return result}) : []}))})
  }

}
