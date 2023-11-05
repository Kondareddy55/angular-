import { Component, ContentChild, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
// ngOnChanges(changes: SimpleChanges): void {
//   console.log("thisiskd");
//   console.log(changes);
// }
  // ngOnInIt(){
  //   console.log("ngoninit")
  // }
  // ngOnChanges(changes: SimpleChanges) {
  //   console.log("this is onchaneges")
  // } 
  // }
// @Input() d1: any;
//   @Output() boby=new EventEmitter()
// msg="pop"
// passtoparent(){
//   this.boby.emit(this.msg);
// }
// data="view child";
// passtoparent(){
//   return this.data;
// }
@ContentChild('data') data:ElementRef;
ngAfterContentInit(){
  console.log(this.data.nativeElement.InnerText)
}

}