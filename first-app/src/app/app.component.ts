import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Recipe Book';
  activeScreen = "recipes";

  displayScreen(screenName:string){
    this.activeScreen = screenName;
  }
}
