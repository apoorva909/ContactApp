import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {} from './contact-information/contact-info/contact-info.module'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path:'contactInfo', loadChildren: () => import('./contact-information/contact-info/contact-info.module').then(m => m.ContactInfoModule)},
  {path: '', redirectTo:'contactInfo', pathMatch:'full'},
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
