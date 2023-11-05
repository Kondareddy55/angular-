import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child/child.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CoursedetailComponent } from './components/coursedetail/coursedetail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { CourseService } from './services/course.service';
import { HomeComponent } from './components/home/home.component';
import { ObervableComponent } from './component/obervable/obervable.component';
import{HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { PromiseComponent } from './component/promise/promise.component';
import { SelectedcourseComponent } from './component/selectedcourse/selectedcourse.component';
import { CoursedurationComponent } from './component/courseduration/courseduration.component';
import { TDFComponent } from './component/tdf/tdf.component';
import { ApiComponent } from './component/api/api.component';
import { MoblieappComponent } from './component/moblieapp/moblieapp.component';
import { MobileService } from './services/mobile.service';
import { FormappComponent } from './componenet/formapp/formapp.component';
import { CustomPipe } from './pipe/custom.pipe';
import { CustomDirective } from './directive/custom.directive';
import { ReactiveComponent } from './component/reactive/reactive.component';
import { ChangeInterceptor } from './interceptor/change.interceptor';
import { MulticastingComponent } from './component/multicasting/multicasting.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    PagenotfoundComponent,
    CoursesComponent,
    CoursedetailComponent,
    HomeComponent,
    ObervableComponent,
    PromiseComponent,
    SelectedcourseComponent,
    CoursedurationComponent,
    TDFComponent,
    ApiComponent,
    MoblieappComponent,
    FormappComponent,
    CustomPipe,
    CustomDirective,
    ReactiveComponent,
    MulticastingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CourseService,MobileService,{
    provide:HTTP_INTERCEPTORS,
    useClass:ChangeInterceptor,
    multi:true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
