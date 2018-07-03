import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
 @Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  constructor(private Auth:AuthService) { }

  ngOnInit() {
  }

  loginUser(event){
     event.preventDefault() 
     const target = event.target
     let username = target.querySelector("#username").value;
    // console.log(username);
     this.Auth.getUserDetails(username);

    }
}
