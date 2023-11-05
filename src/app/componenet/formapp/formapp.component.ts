import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TemplateService } from 'src/app/services/template.service';
import { Template } from 'src/app/template';


@Component({
  selector: 'app-formapp',
  templateUrl: './formapp.component.html',
  styleUrls: ['./formapp.component.css']
})
export class FormappComponent {
 
  result: boolean;
 constructor(private _template:TemplateService){}
 title=["mr","mr's"]
 select=["ITsector","Hardwaresector","sales"]
 user=new Template( "","","",""," ","","","","","","","","","","","");
//  tdf=[];
//  postData:string="";
//  name:string="";
//  isCheck:boolean=true;
//  required:boolean|string
 onSubmit(){
  console.log(this.user);
  this._template.postData(this.user).subscribe(
    (data)=>{
      console.log(data);
      this.result=true;
    // this.tdf=data;
    // this.isCheck=false;
    },
    (error)=>{
      console.log('error',error);
      this.result=false;
    }
  )
 }

}
