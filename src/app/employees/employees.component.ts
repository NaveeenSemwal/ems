import { Component, OnInit } from '@angular/core';
import {  Employee } from "./employee";
import {  ContactServiceService } from "../contact/contact-service.service";
import { Observable } from 'rxjs/Observable';

import { Router } from "@angular/router";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
 
  counter : number;

employeeList : Employee[]=new Array<Employee>();

  constructor(private _contactService : ContactServiceService,private router: Router) {


 

    this._contactService.GetAllUser().subscribe(data => 
      {
      
     this.counter=0;

     for(var i in data)
     {
     
      var index= this.counter;

        var contact= data[i];

       var theTypeIs = Object.keys(data)[index];

       this.counter++;

        //console.log(theTypeIs);
        //console.log("This is the key of Contact "+ Object.keys(data));

       this.employeeList.push(
        {
          Id : theTypeIs,
          Name: contact.Name,
          Email: contact.Email,
          Phone : contact.Phone,
          Message : contact.Message
        }
      );
         
          
     }

  

     

      
    },
    error => {
      console.error("Error while getting Contact !");
      
    });
   }

  ngOnInit() {
  }


  editButton (id : string) {

    //console.log("Value of Phone is "+ Phone);
    
    this.router.navigate(['/employeelist', id]);
}


deleteButton(id : string, name:string, index:number) 
{

  //console.log("The Value of Id is "+name + "   and Index is "+index);

 this._contactService.deleteContact(id,name).subscribe(response =>
  {

   console.log("The contact has been deleted successfully");

  this.employeeList.splice(index, 1);
  }
  

)}

  
}
