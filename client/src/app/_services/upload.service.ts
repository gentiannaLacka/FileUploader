import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Inventory } from '../_models/inventory';
import { Product } from '../_models/product';
import { ReplaySubject } from 'rxjs';  
import { map } from 'rxjs/operators';  

@Injectable({
  providedIn: 'root'
})
export class UploadService {
 baseUrl = "https://localhost:5001/api/";

  private currentInventorySource= new ReplaySubject<Inventory>(5);
  currentInventory$ = this.currentInventorySource.asObservable();

  private currentProductSource= new ReplaySubject<Product>(5);
  currentProduct$ = this.currentProductSource.asObservable();

  constructor(private http: HttpClient) { }

  uploadInventory(model:any){
    return this.http.post(this.baseUrl + "inventories/uploadInventory", model).pipe(map(
      (inventory: Inventory)=>{
        if(inventory){
          localStorage.setItem('inventory', JSON.stringify(inventory));
          this.currentInventorySource.next(inventory);
        }
      }
    ));
  }

  uploadProduct(model:any){
    return this.http.post(this.baseUrl + "products/uploadProduct", model).pipe(map(
      (product: Product)=>{
        if(product){
          localStorage.setItem('product', JSON.stringify(product));
          this.currentProductSource.next(product);
        }
      }
    ));
  }
}
