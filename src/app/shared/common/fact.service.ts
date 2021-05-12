import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FactService {

  constructor(private http: HttpClient) { }

  getFact(): Observable<any> {
    const obs = this.http.get('https://api.spacexdata.com/v4/history')
    const selectedData = (data) => {
      return data as JSON
    }
    return obs.pipe(map(selectedData))
  }
}
