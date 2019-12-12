import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bb-calctax',
  templateUrl: './calctax.component.html',
  styleUrls: ['./calctax.component.css']
})
export class CalctaxComponent implements OnInit {

  pageTitle: string = "Calculate Taxes";

  grossIncome: number;
  yearSelection: number;

  constructor() { }

  ngOnInit() {
  }

}
