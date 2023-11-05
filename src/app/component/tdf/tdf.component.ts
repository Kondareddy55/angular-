import { Component } from '@angular/core';
import { Observable, interval, map, take } from 'rxjs';
import { Formclass } from 'src/app/formclass';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TDFComponent {
//   result:any;
//   constructor(private _country:CountryService){}
//   course=["angular","java","html"]

// usermodel=new Formclass("kondareddy","ko@gmail.com","konda@12345",true,true,"");
  
// onSubmit(){
// console.log(this.usermodel);
// this._country.postData(this.usermodel).subscribe(
//   (data)=>{
//     console.log('success',data);
//     this.result=true;
//   },
//   (error)=>{
//     console.log('error',error);
//     this.result=false;
//   }
// )
// }
  observable$!: Observable<number>;
  observableData:number;
ngOnInit(){
  this.observable$ = this.getObservable();
  this.subscribeObservable();
}
  getObservable(){
  return interval(1000).pipe(take(5),map(value => value+1));
}
subscribeObservable(){
  this.observable$.subscribe((value)=>{
    this.observableData=value;
  })
}
}


