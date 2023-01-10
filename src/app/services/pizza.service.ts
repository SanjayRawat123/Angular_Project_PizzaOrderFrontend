import { Injectable } from '@angular/core';
import { Pizza } from '../model/pizza';
@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }
getPizzaById(pizzaId:number):Pizza{
return this.getall().find(pizza=> pizza.pizzaId== pizzaId)!;
}

getall():Pizza[]{
return[

{
  pizzaId:1,
  pizzaName:"pizza1",
  pizzaSize:"big",
  pizzaPrice:100,
  image:"/assets/pizza1.jpg"
},
{
  pizzaId:2,
  pizzaName:"pizaa2",
  pizzaSize:"Medium",
  pizzaPrice:70,
  image:"/assets/pizza2.jpg"
},
{
  pizzaId:3,
  pizzaName:"pizaa3",
  pizzaSize:"big",
  pizzaPrice:100,
  image:"/assets/pizza3.jpg"
},
{
  pizzaId:4,
  pizzaName:"pizaa4",
  pizzaSize:"big",
  pizzaPrice:100,
  image:"/assets/pizza4.jpg"
},
{
  pizzaId:5,
  pizzaName:"pizaa5",
  pizzaSize:"big",
  pizzaPrice:100,
  image:"/assets/pizza5.jpg"
},
{
  pizzaId:6,
  pizzaName:"pizaa6",
  pizzaSize:"big",
  pizzaPrice:100,
  image:"/assets/pizza6.jpg"
}
,
{
  pizzaId:7,
  pizzaName:"pizaa7",
  pizzaSize:"big",
  pizzaPrice:100,
  image:"/assets/pizza7.jpg"
}
,
{
  pizzaId:8,
  pizzaName:"pizaa8",
  pizzaSize:"big",
  pizzaPrice:100,
  image:"/assets/pizza8.jpg"
},
{
  pizzaId:9,
  pizzaName:"pizaa9",
  pizzaSize:"big",
  pizzaPrice:100,
  image:"/assets/pizza9.jpg"
},
{
  pizzaId:10,
  pizzaName:"pizaa10",
  pizzaSize:"big",
  pizzaPrice:100,
  image:"/assets/pizza9.jpg"
}








]

}



}


