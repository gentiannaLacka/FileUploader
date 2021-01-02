import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { UploadService } from  '../_services/upload.service';
import { Inventory } from '../_models/inventory';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  records = [];
  baseUrl = "https://localhost:5001/api/";

  constructor(private http: HttpClient, private uploadService: UploadService){}

  ngOnInit(){
  } 


   upload($event: any): void {  
    let files = $event.srcElement.files;  
  
    if (this.isValidCSVFile(files[0])) {  

      let input = $event.target;  
      let reader = new FileReader();  

      reader.readAsText(input.files[0]);  
  
      reader.onload = () => {  
        let csvData = reader.result;  
        let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);  
        let record=this.getDataRecordsArrayFromCSVFile(csvRecordsArray);
        this.uploadFile(record) ;  
      };  
  
      reader.onerror = function () {  
        console.log('error is occured while reading file!');  
      };  
  
    }  
  }  
  
  getDataRecordsArrayFromCSVFile(csvRecordsArray: any) {   
   let csvRecord: Inventory;   
    for (let i = 1; i < csvRecordsArray.length; i++) {  
      let curruntRecord = (csvRecordsArray[i]).split(';');        
        csvRecord.handle = curruntRecord[0].trim();  
        csvRecord.vendor = curruntRecord[1].trim();  
        csvRecord.amount = curruntRecord[2].trim();   
    }  
    return csvRecord;  
  }  
  
  isValidCSVFile(file: any) {  
    return file.name.endsWith(".csv");  
  }  
 
   uploadFile(model:any){
     this.uploadService.uploadInventory(model).subscribe(
     response=>{
       console.log(response);
     }, error=>{
       console.log(error);
     });
  }

}
