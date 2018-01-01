import { Component, OnInit } from '@angular/core';
import { validateConfig } from '@angular/router/src/config';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  values = '';

  constructor() { }


  ngOnInit() {
  }

   onKey(event:any) {
    
    this.values += event.target.value + ' | ';
  }

  getValue(value : string)
  {
this.values= value;
  }

}
