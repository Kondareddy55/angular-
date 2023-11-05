import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent {
  constructor(private http:HttpClient){}
  data:any;
product:any;
  getData(){
    this.http.get("https://fakestoreapi.com/products?limit=5")
    .subscribe((data)=>{
     this.data=data;
    }
  
    )
  
    }
}
