import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  constructor(private http: HttpClient) { }

  // Requete pour GET le JSON
  getWeather(): Observable<any> {
    // On GET le JSON
    const obs: Observable<any> = this.http.get('assets/meteo.json')
    //Selection de que l'on veut
    const selectedData = (data) => {
      return data.meteo as JSON
    }
    return obs.pipe(map(selectedData))
  }
}
