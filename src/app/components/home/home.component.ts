import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation:ViewEncapsulation.None
  
})
export class HomeComponent {
// courses: any;
// ngOnDestroy(){
//   console.log("msg")
    promise:Promise<any>;
    
    ngOnInit(){
  this.promise=this.getPromise();
  console.log("any");
  }
  getPromise(){
    return new Promise((res)=>{
      setTimeout(
        () =>{
        res("this");
      },5000)

      })
    }
  }

