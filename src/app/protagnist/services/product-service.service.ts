import { Injectable } from '@angular/core';
import { Observable, of as ObservableOf } from 'rxjs';
import { Product } from '../model/product';
import { HttpClient,HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ProductService {

    constructor(private httpprotocol:HttpClient){}
    observeProduct():Observable<Product>{

	let observableprod = this.httpprotocol.get<Product>(
	    'api/product/:id');
	//	let product = new Product("fish");
	
	return observableprod;
    }

}
