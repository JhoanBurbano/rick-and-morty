import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiResources } from 'src/app/api-resources';
import { response } from 'src/app/interfaces/store.interface';
import { responseCharacters } from 'src/app/modules/characters/interfaces/characters.interface';
import { responseEpisodes } from 'src/app/modules/episode/interfaces/episode.interface';
import { responseLocations } from 'src/app/modules/location/interfaces/location.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor(
    private http: HttpClient
  ) { }

  filterItems(filterQuery:string){
    console.log('filterQuery', filterQuery)
    return this.http.get<response>(environment.BASE_URL + filterQuery)
  }
}
