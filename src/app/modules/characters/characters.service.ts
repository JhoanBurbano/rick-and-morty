import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { apiResources } from '../../api-resources';
import { character, response } from './interfaces/characters.interface';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(
    private http: HttpClient
  ) { }

  getCharacters(){
    return this.http.get<response>(environment.BASE_URL + apiResources.getCharacter)
  }

  getMultiCharacters(query: string){
    return this.http.get<Array<character>>(environment.BASE_URL + apiResources.getCharacter + query)
  }
}
