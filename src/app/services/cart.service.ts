import { Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cart } from '../model/cart';
import { CartItem } from '../model/cartitem';
import { Pizza } from '../model/pizza';

@Injectable({
  providedIn: 'root'
})
export class CartService {
private cart:Cart = new Cart();
  constructor() { }
addToCart(pizza:Pizza):any{
  let cartitem = this.cart.items.find(item=>item.pizzas.pizzaId===pizza.pizzaId)
  if(cartitem){
    this.changeQuantity(pizza.pizzaId,cartitem.quantity+1)
    return;
  }
this.cart.items.push(new CartItem(pizza));


}


removeFromCart(pizzaId:number):void{
  this.cart.items =this.cart.items.filter(item=>item.pizzas.pizzaId!=pizzaId)
}

changeQuantity(quantity:number,pizzaId:number){
  let cartItem =this.cart.items.find(item=>item.pizzas.pizzaId===pizzaId);
  if(!cartItem)return;
  cartItem.quantity=quantity;
}

getCart():Cart{
  return this.cart;
}


}
