import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { apiResources } from '../../api-resources';
import { response } from './interfaces/location.interface';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(
    private http: HttpClient
  ) { }

  getLocations(){
    return this.http.get<response>(environment.BASE_URL + apiResources.getLocation)
  }
}
