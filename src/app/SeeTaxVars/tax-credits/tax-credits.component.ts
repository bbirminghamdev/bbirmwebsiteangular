import { Component, OnInit } from '@angular/core';
import { ITaxCredit } from './TaxCredit';
import { TaxCreditService } from '../../shared/TaxCredit.service';


@Component({
  selector: 'bb-tax-credits',
  templateUrl: './tax-credits.component.html',
  styleUrls: ['./tax-credits.component.css']
})
export class TaxCreditsComponent implements OnInit {

  pageTitle: string = "Tax Credits";
  errorMessage: string;
    
  _yearFilter: number;
  get yearFilter(): number {
    return this._yearFilter;
  }
  set yearFilter(value: number) {
    this._yearFilter = value;
    this.filteredTaxCredits = this.yearFilter ? this.performFilter(this.yearFilter) : this.taxCredits
  }

  filteredTaxCredits: ITaxCredit[];

  taxCredits: ITaxCredit[];
    
  ngOnInit(): void {
    this.taxCreditService.getTaxCredits().subscribe({
      next: taxCredits => { 
        this.taxCredits = taxCredits
        this.filteredTaxCredits = this.taxCredits;
      },
      error: err => { this.errorMessage = err }
    });
    
  }

  constructor( private taxCreditService : TaxCreditService) {
    
  }

  performFilter(yearFilter: number): ITaxCredit[] {
    return this.taxCredits.filter((taxCredit : ITaxCredit) => 
      taxCredit.year == yearFilter);
  }

}
