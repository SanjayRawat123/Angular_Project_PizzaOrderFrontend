
import { Pizza } from "./pizza";

export class CartItem{


    constructor(pizza:Pizza){
        this.pizzas=pizza;
        this.getPrice();
    
    }


    pizzas:Pizza;

    quantity:number=1;

    getPrice():number{
      return  Number(this.pizzas.pizzaPrice)*Number(this.quantity);
    }

}