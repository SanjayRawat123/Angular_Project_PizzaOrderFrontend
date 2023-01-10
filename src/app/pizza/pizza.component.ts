import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pizza } from '../model/pizza';
import { CartService } from '../services/cart.service';
import { PizzaService } from '../services/pizza.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
[x: string]: any;
pizza!:Pizza;
  constructor(private activated:ActivatedRoute,  _pizza:PizzaService , private cartService:CartService, private router:Router) { 

    activated.params.subscribe((params)=>{
      if(params['pizzaId'])
      this.pizza = _pizza.getPizzaById(params['pizzaId'])
    })
  }





  ngOnInit(): void {
  }
    addToCard(){
      this.cartService.addToCart(this.pizza);
      this.router.navigateByUrl('/cart-page')
    }
}
