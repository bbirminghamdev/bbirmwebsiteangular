import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bb-linkhoverbutton',
  templateUrl: './linkHoverButton.component.html',
  styleUrls: ['./linkHoverButton.component.css']
})
export class LinkHoverButtonComponent implements OnInit {

  @Input() icon: string;
  @Input() url: string; 
  @Input() mouseOverColor: string = 'aqua'; 
  @Input() mouseLeaveColor: string = 'white'; 

  hover: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
