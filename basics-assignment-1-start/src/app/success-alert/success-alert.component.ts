import {Component, OnInit} from "@angular/core";

@Component({selector: "app-success-alert", template: `
    <p>success-alert works!</p>
    <p>on multiple lines</p>
  `, styleUrls: ["./success-alert.component.css"]})
export class SuccessAlertComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
