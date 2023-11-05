import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent {

constructor(private _formBuilder:FormBuilder){}
register=this._formBuilder.group({
  username:['kondareddy' ,[Validators.required,Validators.minLength(3)]],
  email:['ko@gmail.com'],
  password:['konda@12345'],
  Confirmpassword:['konda@12345'],
  address:this._formBuilder.group({
    city:['vij'],
    state:['ap'],
    pincode:['505526'],
  })
})
Display(){
  this.register.setValue({
    username:'konda',
    email:'ko@gmail.com',
    password:'konda@12345',
    Confirmpassword:'konda@12345',
    address:{
      city:'vij',
      state:'ap',
      pincode:'505526',
    }
  })
}
// register=new FormGroup({
//   username:new FormControl("kondareddy"),
//   email:new FormControl("ko@gmail.com"),
//   password:new FormControl("konda@12345"),
//   Confirmpassword:new FormControl("konda@12345"),
//   address:new FormGroup( {
//       city:new FormControl('knr'),
//       state:new FormControl('ts'),
//       pincode:new FormControl('505526'),
//     })
// })


}
