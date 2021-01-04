import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Inventory } from '../_models/inventory';
import { Product } from '../_models/product';
import { ReplaySubject } from 'rxjs';  
import { map } from 'rxjs/operators';  
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UploadService {
  baseUrl = environment.apiUrl;

  private currentInventorySource= new ReplaySubject<Inventory>(5);
  currentInventory$ = this.currentInventorySource.asObservable();

  private currentProductSource= new ReplaySubject<Product>(5);
  currentProduct$ = this.currentProductSource.asObservable();

  constructor(private http: HttpClient) { }

  uploadInventory(model:any){
    return this.http.post(this.baseUrl + "inventories/uploadInventory", model).pipe(map(
      (inventory: Inventory)=>{
        if(inventory){
          this.currentInventorySource.next(inventory);
        }
      }
    ));
  }

  uploadProduct(model:any){
    return this.http.post(this.baseUrl + "products/uploadProduct", model).pipe(map(
      (product: Product)=>{
        if(product){
          this.currentProductSource.next(product);
        }
      }
    ));
  }
}
