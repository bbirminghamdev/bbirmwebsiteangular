import { Component, OnInit } from '@angular/core';

import { IEIRate } from './ei-rate';
import { EIRateService } from '../../shared/EIRate.service';


@Component({
  selector: 'bb-ei-rate',
  templateUrl: './ei-rate.component.html',
  styleUrls: ['./ei-rate.component.css']
})
export class EiRateComponent implements OnInit {

  pageTitle: string = "EI Rates";
  errorMessage: string;
    
  _yearFilter: number;
  get yearFilter(): number {
    return this._yearFilter;
  }
  set yearFilter(value: number) {
    this._yearFilter = value;
    this.filteredEIRates = this.yearFilter ? this.performFilter(this.yearFilter) : this.eiRates
  }

  filteredEIRates : IEIRate[];

  eiRates: IEIRate[];
    
  ngOnInit(): void {
    this.eiRateService.getEIRates().subscribe({
      next: eiRates => { 
        this.eiRates = eiRates
        this.filteredEIRates = this.eiRates;
      },
      error: err => { this.errorMessage = err }
    });
    
  }

  constructor( private eiRateService : EIRateService) {

  }

  performFilter(yearFilter: number): IEIRate[] {
    return this.eiRates.filter((eiRates : IEIRate) => 
      eiRates.year == yearFilter);
  }

}
