import { Component , Input} from '@angular/core';
import { Product } from '../model/product';

import { ProductService } from '../services/product-service.service';

@Component({
  selector: 'bw-aardvark',
  standalone: false,
  styleUrl: './aardvark.component.css',
  templateUrl: './aardvark.component.html',
})
export class AardvarkComponent {
    @Input() public something!: Product;
    
    constructor(private prodservice: ProductService){
	
    }



    Onobserveproduct(event:{}){
		this.prodservice.observeProduct().subscribe(prod=>{this.something= prod});
    }
}
