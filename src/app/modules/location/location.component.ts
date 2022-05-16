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
  info: {} = {}

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.dispatch(loadLocations())
    this.store.pipe(select((state:any)=>state.locations)).subscribe(loc => {this.locations = loc.items, this.info = loc.info})
  }

}
