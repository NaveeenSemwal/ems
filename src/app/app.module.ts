import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Step-2 for the Routing
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms'; // This is required for Template-Driven form
import  { ContactServiceService} from './contact/contact-service.service'

import { HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { EmployeesComponent } from './employees/employees.component';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService as AuthGuard, AuthGuardService } from './auth-guard.service';




// Step - 3 of Routing
const appRoutes: Routes = [
  { path: 'register', component:  RegisterComponent,data :{ name :'naveen' ,company :'ITC'}},
  { path: 'home',      component: HomeComponent },
  { path: 'login',      component: LoginComponent },
  { path: 'contact-us',      component: ContactComponent },
  { path: 'about-us/:Id',      component: AboutusComponent },
  { path: 'employeelist',      component: EmployeesComponent ,canActivate: [AuthGuard]},
  {
    path: 'employeelist/:id',
    component: ViewemployeeComponent
  },
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  { path: '**', component: PageNotFoundComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    ContactComponent,
    AboutusComponent,
    PageNotFoundComponent,
    EmployeesComponent,
    ViewemployeeComponent,
    LoginComponent
  ],
  imports: [
    // configure the router.
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),

    BrowserModule,
    FormsModule,  // // This is required for Template-Driven form
    HttpModule   // This is for HTTP service
  ],
  providers: [ContactServiceService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
