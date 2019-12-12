import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { LinkBarComponent } from './LinkBar/LinkBar.component';
import { TaxBracketComponent } from './SeeTaxVars/TaxBrackets/TaxBracket.component';
import { TaxCreditsComponent } from './seetaxvars/tax-credits/tax-credits.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { TaxGridComponent } from './seetaxvars/tax-grid.component';
import { YearComponent } from './seetaxvars/year/year.component';
import { CppRateComponent } from './seetaxvars/cpp-rate/cpp-rate.component';
import { EiRateComponent } from './seetaxvars/ei-rate/ei-rate.component';
import { BlogComponent } from './blog/blog.component';
import { CalctaxComponent } from './calctax/calctax.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'TaxGrid', component:TaxGridComponent },
      { path: 'About', component:AboutComponent },
      { path: 'Blog', component:BlogComponent },
      { path: 'CalcTax', component:CalctaxComponent }
      // { path: '', redirectTo: 'About', pathMatch: 'full' },
      // { path: '**', component:AboutComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [
    AppComponent,
    LinkBarComponent,
    TaxBracketComponent,
    TaxCreditsComponent,
    AboutComponent,
    TaxGridComponent,
    YearComponent,
    CppRateComponent,
    EiRateComponent,
    BlogComponent,
    CalctaxComponent,
    FooterComponent
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
