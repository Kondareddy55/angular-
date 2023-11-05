import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {


   courses: any = [];
   kd:any;
constructor(private _courseService: CourseService,private router:Router, private _ar:ActivatedRoute){
  
}
ngOnInit(){
   this.courses = this._courseService.getcourses();
   this.kd=this._ar.snapshot.paramMap.get("id")
}
onselect(course:any){
this.router.navigate(['/selected',course.id])
}
selected(course: any){
   return course.id==this.kd;
}
}

