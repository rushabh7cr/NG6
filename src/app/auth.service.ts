import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }

  getUserDetails(name){
    //send data to the server
    return this.httpClient.post('http://localhost:3000/api',{
      name
    })
    .subscribe(data=>{
      console.log("zzzzzzz");
      console.log(data);
    },err=>{
      console.log(err);
    })
  }

 
}
