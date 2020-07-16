import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ContactInfoComponent } from './contact-info.component';


const contactRoute: Routes = [
  {
    path: '',
    component: ContactInfoComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(contactRoute)
  ]
})
export class ContactInfoModule { }
