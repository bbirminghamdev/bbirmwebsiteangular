import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bb-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  hover_in: boolean = false;
  hover_git: boolean = false;
  hover_card: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
