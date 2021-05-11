import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class NasaService {
  public service: HttpClient;
  private key: string = 'UWrRWMTJ9lZL95w5irv7LXfyC51U4tmWIcgmZTkQ';
  private url: string = 'https://api.nasa.gov/planetary/apod?count&start_date=2019-09-16&end_date=2019-09-18&api_key=';


  constructor(param_service: HttpClient) {
    this.service = param_service;
  }


  public getImageOfTheDay(): Observable<[]> {
    const obs: Observable<any> = this.service.get(
      this.url + this.key
    );
    const treatment = (param_data: any) => {
      return param_data as [];
    };
    return obs.pipe(map(treatment));
  }
}
