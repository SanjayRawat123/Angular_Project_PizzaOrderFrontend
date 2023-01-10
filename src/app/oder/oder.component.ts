import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Pizza } from '../model/pizza';
import { CartService } from '../services/cart.service';
import { PizzaService } from '../services/pizza.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-oder',
  templateUrl: './oder.component.html',
  styleUrls: ['./oder.component.css']
})
export class OderComponent implements OnInit {
  pizza!:Pizza;
  constructor(private activated:ActivatedRoute,  _pizza:PizzaService, private cartService:CartService, private snack:MatSnackBar,
    private router:Router, private _user:UserService ) { 
    activated.params.subscribe((params)=>{
      if(params['pizzaId'])
      this.pizza = _pizza.getPizzaById(params['pizzaId'])
    })
  }

  ngOnInit(): void {
  }

  postPizza(_cart:Pizza){
    this._user.postContent(this.pizza).subscribe(
      ( data) => {
  
  
         console.log(data);
       }
     )
     this.snack.open('Note Added successfully', 'success', {​
            duration: 5000,​
            panelClass: ['mat-toolbar', 'mat-primary']​
            })
  
        //this.route.navigateByUrl("")
  }




}
