import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') subscribeForm: NgForm;
  subPlans = {
    1: "Basic",
    2: "Advanced",
    3: "Pro"
  }
  defaultSubPlan = 2;

  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
