import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { location } from './interfaces/location.interface';
import { loadLocations } from './store/location.actions';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  locations: Array<location> = []
  pagination:Array<{value:number, next: Array<any>}> = [];

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.dispatch(loadLocations({ page: "?pages=1&name=" }))
    this.store.pipe(select((state:any)=>state.locations)).subscribe(loc => {this.locations = loc.items, this.pagination =  Array(loc.info.pages).fill(0).map((x,i)=>({value: i+1, next: loc.info.next?((loc.info.next.split('?')[1]).split('&')).map((ele:string) => { let result = ele.split('=')[0]; if(ele.includes('name')){ result = ele};  return result}) : []}))})
  }

}
