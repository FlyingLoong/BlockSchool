import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration-1',
  templateUrl: './registration-1.component.html',
  styleUrls: ['./registration-1.component.css']
})
export class Registration1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  nextStep() : void{
    console.log("next step is called!");
  }

}
