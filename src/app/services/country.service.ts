import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class CountryService {
  
  // private _searchurl="https://dummyjson.com/products/add";
  // constructor(private _http: HttpClient) { }

  
  // postData(user:Formclass){ 
  //   return this._http.post<any>(this._searchurl,user);
  // }
}
