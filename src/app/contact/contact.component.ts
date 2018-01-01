import { Component, OnInit } from '@angular/core';
import { ContactInformation } from "./contactModel";
import { Country } from "./countryModel";
import { NgForm } from '@angular/forms/src/directives/ng_form';
import {  ContactServiceService } from "./contact-service.service";
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  submitted = false;
  model = new ContactInformation();

  countries= [new Country(0,"--Select--"),new Country(1,"India"), new Country(2,"Korea")]; 

// router is for navigating user on success.
  constructor(private myservice : ContactServiceService) { 

  }

  ngOnInit() {
  }


  onSubmit(form: NgForm) {
    
   // alert("form clicked");

    if(form.valid)
    {
      //alert("form is valid");

      this.model= form.value;

     console.log("Name is : "+ this.model.Name+" Email Id : "+this.model.Email);
      
     this.myservice.AddUser(this.model).subscribe(data => 
      {
      // refresh the list
      //this.getFoods();
        console.log("Data saved successfully.");
       form.resetForm();
      return true;
    },
    error => {
      console.error("Error saving Contact !");
      return Observable.throw(error);
    });



     // form.resetForm();
    }
   
    this.submitted = true; }
  

}
