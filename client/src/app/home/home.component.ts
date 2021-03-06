import { Component, OnInit } from '@angular/core';
import { UploadService } from  '../_services/upload.service';
import { Inventory } from '../_models/inventory';
import { Product } from '../_models/product';
import { Image } from '../_models/image';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  records = [];
  inventories;
  products;
 
  constructor(private uploadService: UploadService){}

  ngOnInit(){} 

  uploadInventory($event: any) {  
      let reader = new FileReader();  

      reader.readAsText($event.target.files[0]);  
      reader.onload = () => {  
        this.records.push($event.target.files[0]);
        let csvData = reader.result;  
        let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);  
        let records=this.getDataRecordsArrayFromCSVFile(csvRecordsArray);       
        this.uploadCSVFile(records); 
      };   
      reader.onerror = function () {  
        console.log('error is occured while reading file!');  
      };    
  }  

   uploadProduct($event: any) {   
      let reader = new FileReader();  

      reader.readAsText($event.target.files[0]);  
      reader.onload = () => {  
        this.records.push($event.target.files[0]);
        let xml = reader.result;  
        let convert = require('xml-js');
        let result = convert.xml2json(xml, {compact: true, spaces: 4}); 
        let obj=JSON.parse(result);
        let records= this.getDataRecordsArrayFromXMLFile(obj.products.product);
        this.uploadXMLFile(records);
      };  

      reader.onerror = function () {  
        console.log('error is occured while reading file!');  
      };  

  }  

  getDataRecordsArrayFromXMLFile(productsArray: any) {   
    let productArr= [];
    for (let i = 1; i < productsArray.length; i++) {  
        let xmlRecord: Product = new Product();
        let image: Image = new Image();

        xmlRecord.id = productsArray[i]["id"]["_text"];
        xmlRecord.title=productsArray[i]["title"]["_text"];
        xmlRecord.bodyHtml=productsArray[i]["body-html"]["_text"];
        xmlRecord.vendor=productsArray[i]["vendor"]["_text"];
        xmlRecord.productType=productsArray[i]["product-type"]["_text"];
        xmlRecord.createdAt=productsArray[i]["created-at"]["_text"];
        xmlRecord.handle=productsArray[i]["handle"]["_text"];
        xmlRecord.publishedScope=productsArray[i]["published-scope"]["_text"];
        xmlRecord.tags=productsArray[i]["tags"]["_text"];

        if(productsArray[i].image["alt"]!=undefined){
          image.imageAlt=productsArray[i].image["alt"]["_text"];
        }
         if(productsArray[i].image["position"]!=undefined){
          image.position=productsArray[i].image["position"]["_text"];
        }
          image.id=productsArray[i].image["id"]["_text"];
          image.productId=productsArray[i].image["product-id"]["_text"];
          image.createdAt=productsArray[i].image["created-at"]["_text"];
          image.updatedAt=productsArray[i].image["updated-at"]["_text"];
          image.width=productsArray[i].image["width"]["_text"];
          image.height=productsArray[i].image["height"]["_text"];
          image.imageSrc=productsArray[i].image["src"]["_text"];

        xmlRecord.image= image;
        productArr.push(xmlRecord);
    }  
    return productArr;  
  }  

  getDataRecordsArrayFromCSVFile(csvRecordsArray: any) {   
    let inventoryArr= [];

    for (let i = 1; i < csvRecordsArray.length; i++) {  
        let csvRecord: Inventory = new Inventory();   
        let currentInventory = (csvRecordsArray[i]).split(';');         
        csvRecord.handle = currentInventory[0].trim().replace(/"/g,"");  
        csvRecord.location = currentInventory[1].trim().replace(/"/g,"");  
        csvRecord.amount = currentInventory[2].trim().replace(/"/g,"");  
       
        inventoryArr.push(csvRecord);
    }  
    return inventoryArr;  
  }  

   uploadCSVFile(inventories:Inventory[]){
     this.uploadService.uploadInventory(inventories).subscribe(
     response=>{
       this.inventories=response;
     }, error=>{
       console.log(error);
     });
  }

     uploadXMLFile(products:Product[]){
     this.uploadService.uploadProduct(products).subscribe(
     product=>{
       this.products=product;
     }, error=>{
       console.log(error);
     });
  }

}
