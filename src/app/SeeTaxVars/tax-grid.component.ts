import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bb-tax-grid',
  templateUrl: './tax-grid.component.html',
  styleUrls: ['./tax-grid.component.css']
})
export class TaxGridComponent implements OnInit {

  pageTitle:string = "Database Contents"

  selectedYear:number = 1;

  selectedYearChangedEventHandler(selectedYear) {  
    this.selectedYear = selectedYear;
  }

  constructor() { }

  ngOnInit() {
  }

}
