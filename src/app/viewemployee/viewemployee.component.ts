import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";
import { ContactServiceService } from '../contact/contact-service.service';
import { Employee } from '../employees/employee';


@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css']
})
export class ViewemployeeComponent implements OnInit {
  
  Id : number;
 employee: Employee=new Employee();
 
  constructor(private _activeRoute : ActivatedRoute, private router: Router,private _service: ContactServiceService) 
  { 

    

    this.Id= _activeRoute.snapshot.params["id"];
// Fetch data based on Id for Edit.


if(localStorage['authUser'] !== undefined && localStorage['authUser'] !==null)
{
  console.log("USER LOGGED IN............");
     this.employee= this._service.user;
     console.log("The logged in user is  "+ this.employee);
}else
{
  console.log("NO USER LOGGED IN............");
}

  }




  ngOnInit()
   {
  }



  backButton () {
    this.router.navigateByUrl('employeelist');
}
}
