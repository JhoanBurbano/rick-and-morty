import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { character } from 'src/app/modules/characters/interfaces/characters.interface';
import { episode } from 'src/app/modules/episode/interfaces/episode.interface';
import { location } from 'src/app/modules/location/interfaces/location.interface';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {
  @Input() items: Array<character | episode | location | any> = [];
  @Input() type: 'character' | 'episode' | 'location' | '' = ''
  filter:string | null= ""

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.filter = this.route.snapshot.queryParamMap.get('filter') ? this.route.snapshot.queryParamMap.get('filter') : ""
    if(this.filter){
            let find = this.filter;
            this.items = this.items.filter((item:character | episode | location)=>{
              return item.name.includes(find)? true : false;
            })
        }
  }

}
