import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { YearService } from '../Year.service';
import { IYear } from 'src/app/seetaxvars/year/Year';

@Component({
  selector: 'bb-year-select',
  templateUrl: './year-select.component.html',
  styleUrls: ['./year-select.component.css']
})
export class YearSelectComponent implements OnInit {

  @Input() yearId: number;
  @Input() disabled: boolean = false;
  @Output() selectedYearEmitter: EventEmitter<number> = new EventEmitter<number>();
  yearForm: FormGroup;  
  years: IYear[];
  errorMessage: string;
  loaded: boolean = false;

  constructor(private fb: FormBuilder, private yearService : YearService) { }

  ngOnInit() {
    this.yearService.getYears().subscribe({
      next: years => { 
        this.years = years
        this.loaded=true
         this.yearForm = this.fb.group({
           yearSelect: [this.yearId]
         });
         if(this.disabled) this.yearForm.disable()
         this.onValueChanges();
      },
      error: err => { this.errorMessage = err }
    });
  }

  onValueChanges(): void {
    this.yearForm.valueChanges.subscribe(val=>{
      this.selectedYearEmitter.emit(val);
    })
  }

}
