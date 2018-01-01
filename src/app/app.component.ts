import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactServiceService } from './contact/contact-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

constructor (private _contactService: ContactServiceService,private route: Router)
{

}

  onSubmit(loginForm : NgForm)
  {
  // console.log("login request submitted !!"); 
  //   console.log(loginForm.value);

     var loginModel= loginForm.value;


     this._contactService.Authenticate(loginModel.UserEmail,loginModel.UserPhone).subscribe(
       data=>
       {
         console.log(data);

         document.getElementById('id01').style.display='none';

         return this.route.navigateByUrl("/employeelist");
       },
       error=>{console.log("Error occured while ")}
    
    
    );
  }

}
