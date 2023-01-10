import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './cart-page/cart-page.component';
import { HomeComponent } from './home/home.component';
import { OderComponent } from './oder/oder.component';
import { PizzaComponent } from './pizza/pizza.component';

const routes: Routes = [

{path:"",component:HomeComponent},

{
  path:"cart-page", component:CartPageComponent
}
,
{
  path:"pizza/:pizzaId", component:PizzaComponent
}
,
{
  path:'cart-page/:pizzaId',component:CartPageComponent
}
,
{
  path:'oder/:pizzaId',component:OderComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
