import { Component } from '@angular/core';
import { BehaviorSubject, Subject, interval } from 'rxjs';

@Component({
  selector: 'app-multicasting',
  templateUrl: './multicasting.component.html',
  styleUrls: ['./multicasting.component.css']
})
export class MulticastingComponent {
ngOnInit(){
//  let  obj=interval(1000);
//  let sub1=obj.subscribe((value) => {
//   console.log("1st subscirbe "+value);
//  })
// setTimeout(()=>{
//   let sub2=obj.subscribe((value)=>{
//     console.log("2nd sub"+value)
//   });
// sub1.unsubscribe();
// setTimeout(()=>{

// },5000)
//  sub2.unsubscribe(); 
// },6000)
let subject=new BehaviorSubject(0);
let obs=interval(1000);
 obs.subscribe((value)=>{
subject.next(value);
 });
 subject.subscribe((data)=>{
  console.log("1st"+data);

 } )
  setTimeout(()=>{
    subject.subscribe((data)=>{
      console.log("2nd"+data);
    })

    
  },5000 )
    
//   subject.unsubscribe();
//    setTimeout(()=>{
  
//   },5000)
//    subject.unsubscribe(); 
// },5000)
//  }

}
}
