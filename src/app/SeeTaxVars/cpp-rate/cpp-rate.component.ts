import { Component, OnInit } from '@angular/core';

import { ICPPRate } from './cpp-rate';
import { CPPRateService } from '../../shared/CPPRate.service';

@Component({
  selector: 'bb-cpp-rate',
  templateUrl: './cpp-rate.component.html',
  styleUrls: ['./cpp-rate.component.css']
})
export class CppRateComponent implements OnInit {

  pageTitle: string = "CPP Rates";
  errorMessage: string;
    
  _yearFilter: number;
  get yearFilter(): number {
    return this._yearFilter;
  }
  set yearFilter(value: number) {
    this._yearFilter = value;
    this.filteredCPPRates = this.yearFilter ? this.performFilter(this.yearFilter) : this.cppRates
  }

  filteredCPPRates : ICPPRate[];

  cppRates: ICPPRate[];
    
  ngOnInit(): void {
    this.cppRateService.getCPPRates().subscribe({
      next: cppRates => { 
        this.cppRates = cppRates
        this.filteredCPPRates = this.cppRates;
      },
      error: err => { this.errorMessage = err }
    });
    
  }

  constructor( private cppRateService : CPPRateService) {

  }

  performFilter(yearFilter: number): ICPPRate[] {
    return this.cppRates.filter((cppRates : ICPPRate) => 
      cppRates.year == yearFilter);
  }

}
