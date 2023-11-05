import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-obervable',
  templateUrl: './obervable.component.html',
  styleUrls: ['./obervable.component.css']
})
export class ObervableComponent {
//   public country=new FormControl;
//   results: any;

//   constructor(private _CountryService:CountryService){
    
//   }
//   ngOnInit(){
//     this.country.valueChanges.pipe(debounceTime(5000)).subscribe((country: any) =>{
//       console.log(country);
//       this.search(country)
//     })
//   }
// search(value:any){
//   console.log(value)
//   this._CountryService.searchCountries(value).subscribe(
//     (result: any)=>{
//       console.log(result);
//       this.results=result;
//     }
//   )
// }
// let b =new Observable((res)=>{
//   console.log("this is observable");
// res.next("this is res1")
// res.next("this is res2")
// res.next("this is res3")
// })
// b.subscribe({
//   next:async(value)=>{
//     console.log(value)
//   },
//   error:(error)=>{
//     console.log(error);
//   }
// })
 observable = new Observable(observer => {
  setTimeout((data: any) => {
    observer.next('Hello from a Observable!');
  }, 2000);
});
}
