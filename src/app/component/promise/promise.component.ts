import { Component } from '@angular/core';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent {
  results: any=[];

  constructor(private _CountryService:CountryService){
    
  }
search(value:any){
  // console.log(value)
  // this._CountryService.promiseusing(value).then(
  //   (result: any)=>{
  //     console.log(result);
  //     this.results=result;
  //   }
  // )
}
}
