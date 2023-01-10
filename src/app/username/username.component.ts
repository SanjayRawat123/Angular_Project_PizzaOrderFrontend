import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
  public user ={
    username:'' }
 

    
  constructor(private userservice:UserService , private snack:MatSnackBar) { }

  ngOnInit(): void {

  }


  formSubmit(){
   let UN = this.user.username;
   //alert(UN);
    localStorage.setItem("username",UN)
    console.log(this.user)
    if(this.user.username==''||this.user.username==null){
    
    this.snack.open("User name is required",'',{
     duration:3000,
     verticalPosition: 'top',
     horizontalPosition:'left'
    });
    return;
     
   
    }
   
    
    //adduser :userservice
    this.userservice.addUser(this.user).subscribe(
     (data: any)=>{
       //success
  
      
     localStorage.setItem("user",JSON.stringify(this.user.username));
       
     //alert( localStorage.getItem('user'))
    // console.log("hello ")
     alert( localStorage.getItem('username'))
    
     },
     (error: any)=>{
       //failer
     
     }
    )
   
     }
}