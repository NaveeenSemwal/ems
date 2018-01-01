import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { ContactServiceService } from './contact/contact-service.service';



@Injectable()
export class AuthGuardService implements CanActivate
{

    constructor(private contactService : ContactServiceService,private router: Router)
    {

    }

    canActivate(): boolean
    {
        var data= this.contactService.user;

        if (this.contactService.user==null) {
            this.router.navigate(['home']);
            return false;
          }
          return true;
    }

}