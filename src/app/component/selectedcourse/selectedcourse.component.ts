import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-selectedcourse',
  templateUrl: './selectedcourse.component.html',
  styleUrls: ['./selectedcourse.component.css']
})
export class SelectedcourseComponent {
  ed:any;
  courseId: number;
  constructor(private router:Router,private kd1: ActivatedRoute){
    
  }
  ngOnInit(){
    this.ed=this.kd1.snapshot.paramMap.get("id");
    this.kd1.paramMap.subscribe((params: ParamMap)=>{
      this.courseId = (parseInt)(params.get('id'));
    })
  }
onback(){
  this.router.navigate(['/Courses',{id:this.ed}])
}

} 
