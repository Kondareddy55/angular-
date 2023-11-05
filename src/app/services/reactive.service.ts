import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Template } from '../template';

@Injectable({
  providedIn: 'root'
})
export class ReactiveService {

  private _url="https://dummyjson.com/products/add";
  constructor(private _http: HttpClient) { }

  postData(user:Template):Observable<any>{ 
    return this._http.post<any>(this._url,user);
  }
}
