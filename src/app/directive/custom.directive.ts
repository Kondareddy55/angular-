import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(private _eleref:ElementRef) { 
    this._eleref.nativeElement.style.background='red';
  }
  @HostListener("mouseenter") mouseEnter(){
    this.changeColor("yellow");

  }
  changeColor(val: any){
    this._eleref.nativeElement.style.background=val;
  }
@HostListener("mouseout")mouseout(){
  this.changecolor("red");
}
changecolor(war:any){
  this._eleref.nativeElement.style.background=war;
}
}
