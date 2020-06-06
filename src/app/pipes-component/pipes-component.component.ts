import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-component',
  templateUrl: './pipes-component.component.html',
  styleUrls: ['./pipes-component.component.css']
})
export class PipesComponentComponent implements OnInit {

  birthday = new Date(1998,1,18);
  toggle = true;
  power = 5;
  factor = 1;

  constructor() { }

  ngOnInit(): void {
  }

  get format(){
    return this.toggle ? 'shortDate' : 'fullDate';
  }

  toggleFormat(){
    this.toggle = !this.toggle;
  }

}
