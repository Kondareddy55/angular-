import { Component } from '@angular/core';
import { MobileService } from 'src/app/services/mobile.service';

@Component({
  selector: 'app-moblieapp',
  templateUrl: './moblieapp.component.html',
  styleUrls: ['./moblieapp.component.css']
})
export class MoblieappComponent{} 
//   constructor(private ms:MobileService){}
// // mobile:any;
// // mobile=[
// //   {
// //   name:"xyz",
// //   price:23456,
// //   ram:6,
// //   storage:16
// //   },
// //  {
// //   name:"fdfg",
// //   price:2345,
// //   ram:7,
// //   storage:16
// //  } ,
// //  {
// //   name:"dfg",
// //   price:456,
// //   ram:4,
// //   storage:64
// //  },
// //  {
// //   name:"rty",
// //   price:456,
// //   ram:5,
// //   storage:64
// //  }
// ngOnInit(){
// this.ms.fetchMobile().subscribe(
//   (data)=>{
//     this.mobile=data;
//   }
//  )
// }

