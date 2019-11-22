import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  subtitle: string;

  constructor(){
  	this.title = 'La Cuillère',
      this.subtitle = 'Find a restaurant';
  }

}
