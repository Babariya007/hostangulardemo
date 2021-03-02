import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { StudentComponent } from './student/student.component';
import { AddeditComponent } from './addedit/addedit.component';

const routes: Routes = [
  { path: '',component: HomeComponent },
  { path: 'About',component: AboutComponent },
  { path: 'Student', component: StudentComponent },
  { path: 'AddEdit', component: AddeditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
