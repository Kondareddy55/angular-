import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  navigate: any;

  constructor() { }
  getcourses(){
    return [
      {
        id:1,
        Name:'mysql',
        fee:12000
      },
      {
        id:2,
        Name:'java',
        fee:13000
      },
      {
        id:3,
        Name:'html/css',
        fee:15000
      }
      ]
    
  }
}
