import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../services/pizza.service';
import { Pizza } from '../model/pizza';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

pizzaa!:Pizza;



  pizza:Pizza[] = [];




  constructor(private _pizza:PizzaService, private router:ActivatedRoute,private cartservice:CartService, private _router:Router) {
 }

  ngOnInit(): void {
this.pizza = this._pizza.getall();



  }

  addToCart(){
    this.cartservice.addToCart(this.pizzaa);
    this._router.navigateByUrl("/cart-page");
  }





}
