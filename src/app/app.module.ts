import { SignupComponent } from './signup/signup.component';
// import { SignupComponent } from './signup/singup.component';
import { BrowserModule } from '@angular/platform-browser';  
import { NgModule, Component } from '@angular/core';  
  
// import Http module  
import { HttpModule} from '@angular/http';  
  
// import ReactiveFormsModule for reactive form  
import { ReactiveFormsModule } from '@angular/forms';  
  
// import module for Routing.  
import { RouterModule } from '@angular/router';  
  
import { AppComponent } from './app.component';  
import { LoginComponent } from './login/login.component';  
import { HomeComponent } from './home/home.component';  
// import { SignupComponent } from './signup/signup.component';  
import { AdminService } from './services/admin.service';  
import { ProfileComponent } from './profile/profile.component';
import { SignupsuccessComponent } from './signupsuccess/signupsuccess.component';  
  
@NgModule({  
  declarations: [  
    AppComponent,  
    LoginComponent,  
    HomeComponent,  
    SignupComponent,  
    ProfileComponent, SignupsuccessComponent  
  ],  
  imports: [  
    BrowserModule,  
    ReactiveFormsModule,  
    HttpModule,  
    RouterModule.forRoot([  
      {  
        path : '',  
        component : HomeComponent   
      },  
      {  
        path : 'login',  
        component : LoginComponent    
      },  
      {  
        path : 'signup',  
        component : SignupComponent   
      },  
      {  
        path : 'profile/:adminId',  
        component : ProfileComponent  
      } ,
      {

        path : 'signupsuccess',
        component : SignupsuccessComponent 
      }
    ])  
  
  ],  
  providers: [  
    AdminService  
  ],  
  bootstrap: [AppComponent]  
})  
export class AppModule { }  