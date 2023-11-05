import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MobileService {

  constructor(private http:HttpClient) { }
  url="http://localhost:4200/mobile"
  fetchMobile(){
   
return this.http.get(this.url)
  }
}
