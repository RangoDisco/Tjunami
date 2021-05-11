import { Component, OnInit } from '@angular/core';
import { NasaService } from '../nasa.service';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit {
  
  public imgOfTheDay: [] = [];
  public service: NasaService;

  constructor(param_service: NasaService) {
    this.service = param_service;
  }
  public ngOnInit(): void {
    this.service.getImageOfTheDay().subscribe((param_url) => {
      this.imgOfTheDay = param_url;
      
    });
  }

}
