import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { apiResources } from '../../api-resources';
import { character, responseCharacters } from './interfaces/characters.interface';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(
    private http: HttpClient
  ) { }

  getCharacters(page: string){
    return this.http.get<responseCharacters>(environment.BASE_URL + apiResources.getCharacter + page)
  }

  getMultiCharacters(query: string){
    return this.http.get<Array<character>>(environment.BASE_URL + apiResources.getCharacter + query)
  }
}
