import { Component, OnInit, OnChanges } from '@angular/core';
import { ITaxBracket } from './TaxBracket';
import { TaxBracketService } from '../../shared/TaxBracket.service';
import { BaseTaxGridItem } from '../BaseTaxGridItem.component';

@Component({
    selector: 'bb-TaxBrackets',
    templateUrl: './TaxBracket.component.html',
    styleUrls: ['./TaxBracket.component.css']
  
  })

export class TaxBracketComponent extends BaseTaxGridItem
    implements OnInit {

  pageTitle: string = "Tax Brackets";
  errorMessage: string;
    
  _yearFilter: number;
  get yearFilter(): number {
    return this._yearFilter;
  }
  set yearFilter(value: number) {
    this._yearFilter = value;
    this.filteredTaxBrackets = this.yearFilter ? this.performFilter(this.yearFilter) : this.taxBrackets
  }

  filteredTaxBrackets: ITaxBracket[];

  taxBrackets: ITaxBracket[];
    
  ngOnInit(): void {
    this.taxBracketService.getTaxBrackets().subscribe({
      next: taxBrackets => { 
        this.taxBrackets = taxBrackets
        this.filteredTaxBrackets = this.taxBrackets;
      },
      error: err => { this.errorMessage = err }
    });
    
  }

  constructor( private taxBracketService : TaxBracketService) {
    super()
  }

  performFilter(yearFilter: number): ITaxBracket[] {
    return this.taxBrackets.filter((taxBracket : ITaxBracket) => 
      taxBracket.year == yearFilter);
  }
}