import { Component, OnInit } from '@angular/core';

import { IYear } from './Year';
import { YearService } from '../../shared/Year.service';

@Component({
  selector: 'bb-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.css']
})
export class YearComponent implements OnInit {

  pageTitle: string = "Years";
  errorMessage: string;

  filteredYears: IYear[];

  years: IYear[];

  constructor( private yearService : YearService) {
    //super()
  }

  ngOnInit() {
    
    this.yearService.getYears().subscribe({
    next: years => { 
      this.years = years
      this.filteredYears = this.years;
    },
    error: err => { this.errorMessage = err }
  });
  }

}
