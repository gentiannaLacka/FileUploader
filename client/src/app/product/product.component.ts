import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UploadService } from '../_services/upload.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
products=[];
  constructor(private uploadService: UploadService ) { }

  ngOnInit(): void {
    this.loadProducts();
  }
loadProducts(){
  this.uploadService.getProducts().subscribe(
      response=>{
        this.products.push(response);
      }); 
}
}