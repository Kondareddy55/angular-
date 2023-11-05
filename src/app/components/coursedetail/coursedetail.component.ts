import { Component } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-coursedetail',
  templateUrl: './coursedetail.component.html',
  styleUrls: ['./coursedetail.component.css']
})
export class CoursedetailComponent {

courses:any=[]
constructor(private __courseService: CourseService){}

ngOnInit(){
  this.courses = this.__courseService.getcourses();
 }
}
