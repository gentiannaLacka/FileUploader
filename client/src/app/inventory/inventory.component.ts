import { Component, OnInit } from '@angular/core';
import { UploadService } from '../_services/upload.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  inventories= [];
  constructor(private uploadService: UploadService) { }

  ngOnInit(): void {
    this.loadInventories();
  }
  loadInventories(){
    this.uploadService.getInventories().subscribe(
      response=>{
        this.inventories.push(response);
      });   
  }

}
