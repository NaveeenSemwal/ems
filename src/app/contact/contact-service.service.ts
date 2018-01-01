import { Injectable } from '@angular/core';
import {ContactInformation  } from "./contactModel";
import { Observable} from "rxjs/Rx";
import 'rxjs/Rx';  // this.http.post(...).map is not a function angular 4
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import { Employee } from '../employees/employee';

@Injectable()
export class ContactServiceService {

  constructor(private http: Http) { }

  public user : Employee;


private setAuthUser(currentUser: Employee) {
  
localStorage['authUser']= JSON.stringify(currentUser);

this.user= currentUser;

}
  
  AddUser(contact :ContactInformation) 
  {
     //console.log(contact.Name + " This is in  service   "+ contact.Email);

     let headers = new Headers({ 'Content-Type': 'application/json' });
     let options = new RequestOptions({ headers: headers });
     let body = JSON.stringify(contact);
     return this.http.post('https://naveendemo-de8b0.firebaseio.com/contact.json', body, options)
     .map((res: Response) => res.json());
     
  }


  GetAllUser() 
  {
     return this.http.get('https://naveendemo-de8b0.firebaseio.com/contact.json')
     .map((res: Response) => res.json());
     
  }


  deleteContact(id,name) 
  {
    if (confirm("Are you sure you want to delete " + name + "?")) {

      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });

      return this.http.delete('https://naveendemo-de8b0.firebaseio.com/contact/'+id+'.json', options)
      .map((res: Response) => res.json());
      
    }
     
  }


  Authenticate(email,phone) 
  {
      return this.http.get('https://naveendemo-de8b0.firebaseio.com/contact.json')
      .map((res)=>
        {
          const data= res.json();

          for (const key in data)
          {
           if(data[key].Email===email && data[key].Phone===phone)
           {
            const user : Employee=data[key];
            user.Id=key;

            this.setAuthUser(user);

            return user;
           }
          }
        },
         error=>{console.log("Error occured while login !")}
        );

      
    
     
  }

}
