import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-youbot',
  templateUrl: './youbot.component.html',
  styleUrls: ['./youbot.component.css']
})
export class YoubotComponent implements OnInit {
  public youBotLogo: string = "assets/images/youbot.png";
  public croixFermer: string = "assets/images/cross-flat.svg"

  constructor() { }

  ngOnInit(): void {
  }

}
