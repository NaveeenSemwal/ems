import { Component, OnInit,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css'],
  inputs:['parentValue'],
  outputs:['OnchildValueChange']
})
export class AboutusComponent implements OnInit {

  parentValue : string;

  constructor() { }

  ngOnInit() {
  }

  OnchildValueChange=new EventEmitter<string>();

  onValueChanged(input: string)
  {
    console.log("Event is ready to start  "+ input);

     this.OnchildValueChange.emit(input); // This will raise the event

     console.log("Event is Fired  "+ input);
  }
}
