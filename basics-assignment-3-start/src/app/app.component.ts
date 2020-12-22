import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showDetails = false;
  clickLog = [];

  detailsToggle() {
    if (this.showDetails) {
      this.showDetails = false;
    } else {
      this.clickLog.push(Date());
      this.showDetails = true;
    }
  }
}
