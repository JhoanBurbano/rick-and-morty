import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { EpisodeService } from 'src/app/modules/episode/episode.service';
import { episode } from 'src/app/modules/episode/interfaces/episode.interface';
import { loadEpisodes } from 'src/app/modules/episode/store/episode.actions';
import { character } from '../../interfaces/characters.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  id:number | any;
  character: character | any;
  episodes: Array<episode> = []
  query: string = ""

  constructor(private route: ActivatedRoute, private store: Store, private router: Router, private episodeService: EpisodeService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.store.pipe(select((state:any)=>state.characters.items)).subscribe((characters => {
      if(!characters.length){
        this.router.navigate(['/characters'])
      }
      this.character= characters.find((c:character) => c.id == this.id)
    }))
    if(this.character && this.character.episode){
      this.query = this.character.episode.map((e:string)=>(e.split('episode/')[1])).join(',')
      this.episodeService.getMultiEpisodes(this.query).subscribe(
        ((episodes:Array<episode> | episode) => {
          this.episodes= Array.isArray(episodes) ? episodes.filter((e:episode) => e.characters.find((url:string)=> url.split('character/')[1] == this.id) ) : [episodes]
        })
      )
    }
  }

  goLocation(filter: string){
    location.assign(location.origin + '/locations?filter=' + filter)
  }

}
