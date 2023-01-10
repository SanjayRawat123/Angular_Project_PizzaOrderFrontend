
import { CartItem } from "./cartitem";
export class Cart{
    items:CartItem[]=[];
  


    gettotalPrice():number{
        let totalPrice= 0;
        this.items.forEach(item => {
         totalPrice+=item.getPrice()
                    
        });

        return totalPrice;
    }

}