import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-youbot-list',
  templateUrl: './youbot-list.component.html',
  styleUrls: ['./youbot-list.component.css']
})
export class YoubotListComponent implements OnInit {
  public cardFilmYouBot: Array<{name: string, image: string}> = [
    {name: "MatrixXx", image: "assets/images/youbotcensure.png"},
    {name: "X-robot", image: "assets/images/youbotcensure.png"},
    {name: "X-machina", image: "assets/images/youbotcensure.png"},
    {name: "Sexy Robot", image: "assets/images/youbotcensure.png"},
    {name: "Robot's Night", image: "assets/images/youbotcensure.png"},
    {name: "Robot's Love", image: "assets/images/youbotcensure.png"},
];

  constructor() { }

  ngOnInit(): void {

  }

  alertMineur(){
    alert("Vous devez avoir plus de 18 cycles pour accéder à cette vidéo")
  }

}
