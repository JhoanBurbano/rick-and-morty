import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { info } from "src/app/interfaces/store.interface";
import { loadEpisodes } from "../episode/store/episode.actions";
import { loadLocations } from "../location/store/location.actions";
import { character } from "./interfaces/characters.interface";
import { loadCharacters } from "./store/characters.actions";

@Component({
  selector: "app-characters",
  templateUrl: "./characters.component.html",
  styleUrls: ["./characters.component.scss"],
})
export class CharactersComponent implements OnInit {
  characters: Array<character> = [];
  pagination: Array<{ value: number; next: Array<any> }> = [];
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.callStore();
  }

  callStore() {
    this.store.dispatch(loadCharacters({ page: "?pages=1&name=" }));
    this.store.dispatch(loadEpisodes({ page: "?pages=1&name=" }));
    this.store.pipe(select((state:any)=>state.characters)).subscribe(char => {this.characters = char.items, this.pagination =  Array(char.info.pages).fill(0).map((x,i)=>({value: i+1, next: char.info.next?((char.info.next.split('?')[1]).split('&')).map((ele:string) => { let result = ele.split('=')[0]; if(ele.includes('name')){ result = ele};  return result}) : []}))})
  }
}
