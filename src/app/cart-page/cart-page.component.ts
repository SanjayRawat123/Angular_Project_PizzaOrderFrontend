import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cart } from '../model/cart';
import { CartItem } from '../model/cartitem';
import { Pizza } from '../model/pizza';
import { CartService } from '../services/cart.service';
import { PizzaService } from '../services/pizza.service';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

 
_pizza:Pizza={
   pizzaId: 0,
  pizzaName: '',
  pizzaSize: '',
  pizzaPrice: 0,
  image: ""
}




cart!:Cart;
  constructor(private cartService:CartService,private activated:ActivatedRoute,private _snack:MatSnackBar,
     _pizza:PizzaService, private _user:UserService) {


      activated.params.subscribe((params)=>{
        if(params['pizzaId'])
        this._pizza = _pizza.getPizzaById(params['pizzaId'])
      })



    this.setCart();
  }


  ngOnInit(): void {

    
  }
setCart(){
  this.cart=this.cartService.getCart();

}

removeFromCart(cartItem:CartItem){
 this.cartService.removeFromCart(cartItem.pizzas.pizzaId);
 this.setCart();//just  load data

}

changeQuantity(cartItem:CartItem,quantityInString:string){
  const quantity = parseInt(quantityInString);
  this.cartService.changeQuantity(cartItem.pizzas.pizzaId,quantity);
  this.setCart();
}



// postPizza(_cart:Pizza){
//   this._user.postContent(this._pizza).subscribe(
//     ( data) => {


//        console.log(data);
//      }
//    )
//    this._snack.open('Note Added successfully', 'success', {​
//           duration: 5000,​
//           panelClass: ['mat-toolbar', 'mat-primary']​
//           })

//       //this.route.navigateByUrl("")
// }


}
 


