import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddComponents: number[] = [];
  evenComponents: number[] = [];


  createEven(num: number){
    this.evenComponents.push(num);
  }
  createOdd(num: number){
    this.oddComponents.push(num);
  }

  displayStuff(eventData: {num: number}){
    if (eventData.num % 2 == 0){
      this.createEven(eventData.num);
    } else {
      this.createOdd(eventData.num);
    }
    
  }
}
