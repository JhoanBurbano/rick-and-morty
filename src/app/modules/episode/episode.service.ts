import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { episode, responseEpisodes } from './interfaces/episode.interface';
import { apiResources } from '../../api-resources';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  constructor(private http: HttpClient) { }

  getEpisodes(page: string){
    return this.http.get<responseEpisodes>(environment.BASE_URL + apiResources.getEpisodes + page)
  }

  getMultiEpisodes(query: string){
    return this.http.get<Array<episode>>(environment.BASE_URL + apiResources.getEpisodes + query)
  }
}
