import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child/child.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { AppComponent } from './app.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CoursedetailComponent } from './components/coursedetail/coursedetail.component';
import { HomeComponent } from './components/home/home.component';
import { Observable } from 'rxjs';
import { ObervableComponent } from './component/obervable/obervable.component';
import { PromiseComponent } from './component/promise/promise.component';
import { SelectedcourseComponent } from './component/selectedcourse/selectedcourse.component';
import { CoursedurationComponent } from './component/courseduration/courseduration.component';
import { adminAccessGuard } from './guards/admin-access.guard';
import { UserComponent } from './modules/user/user.component';
import { TDFComponent } from './component/tdf/tdf.component';
import { ApiComponent } from './component/api/api.component';
import { MoblieappComponent } from './component/moblieapp/moblieapp.component';
import { FormappComponent } from './componenet/formapp/formapp.component';
import { ReactiveComponent } from './component/reactive/reactive.component';
import { MulticastingComponent } from './component/multicasting/multicasting.component';

const routes: Routes = [

   {
   path: '',
   redirectTo: 'home',
   pathMatch: 'full'
   },
   {
    path:'home',
    component:HomeComponent
  },
  {
    path:'app',
    component:AppComponent
  },
  {
    path:'Child',
    component:ChildComponent
  },
  {
    path:'Courses',
    component:CoursesComponent,
    canActivate:[adminAccessGuard]
  },
  {
    path:'coursedetail',
    component:CoursedetailComponent
  },
  {
    path:'observable',
    component:ObervableComponent
  },
  {
    path:'promise',
    component:PromiseComponent,
    
  },
  {
    path:'selected/:id',
    component:SelectedcourseComponent,
    children:[
      {path:'duration',component:CoursedurationComponent}
    ]
  },

   { path: 'user', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)
},
{
  path:'tdf',
  component:TDFComponent
},
{
  path:'api',
  component:ApiComponent
},
{
  path:'mobile',
  component:MoblieappComponent
},
{
  path:'form',
  component:FormappComponent
},
{
  path:'reactive',
  component:ReactiveComponent
},
{
  path:'multi',
  component:MulticastingComponent
},
    {
  path:'**',
  component:PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
