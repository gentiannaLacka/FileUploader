import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  baseUrl = "https://localhost:5001/api/";

  constructor(private http: HttpClient) { }
}
