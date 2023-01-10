import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pizza } from '../model/pizza';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }


  public addUser(user: { username: string; }){

    return this.http.post("http://localhost:8080/pizza/",user)

  }



 
  baseUrl:String = "http://localhost:8080/pizza"
 
  public postContent(cart:any){
 
    ////pizza/{username}
   return this.http.post("http://localhost:8080/pizza/pizza/"+localStorage.getItem('username'),cart)
 }
 




}

