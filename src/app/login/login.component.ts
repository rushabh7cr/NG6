import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
 @Component({
  selector: 'app-login',
  templateUrl:'./login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  public display = false;
  public words = [];
  public data;
  constructor(private Auth:AuthService) { }
  
  ngOnInit() {
  }
 
  
  loginUser(event){
     event.preventDefault() 
     const target = event.target
     let num = target.querySelector("#num").value;
    // console.log(num);
     this.Auth.getUserDetails(num).subscribe(
       data=>{
         this.data = data;
         this.display = true;
         this.words = Object.keys(data);
         //console.log(this.words)
         //console.log(this.data)
       }
     );
    
    }
    
}
