import { Component } from '@angular/core';

@Component({
  selector: 'bb-LinkBar',
  templateUrl: './LinkBar.component.html',
  styleUrls: ['./LinkBar.component.css']

})
export class LinkBarComponent {
  pageTitle: string = "BBirm Portfolio"

  CalculateTaxes() 
  {
    window.alert('They wanna calc their taxes!');
  }
  SeeTaxVars() 
  {
    window.alert('They wanna see the tax vars!');
  }
  DoSomething() 
  {
    window.alert('They wanna do something!');
  }
  ViewBlog() 
  {
    window.alert('They wanna see my blog!');
  }
  About() 
  {
    window.alert('They wanna know about me!');
  }
}