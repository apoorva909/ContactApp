import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactInfoComponent } from './contact-information/contact-info/contact-info.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialSharedModule } from 'src/shared/material-shared.module';

@NgModule({
  declarations: [
    AppComponent,
    ContactInfoComponent,
    PageNotFoundComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialSharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
