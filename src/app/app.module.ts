import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './_services/data.service';
import { ContactListComponent } from './_pages/contact-list/contact-list.component';
import { CreateContactComponent } from './_pages/create-contact/create-contact.component';
import { ContactsService } from './_services/contacts.service';
import { HomeComponent } from './_pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    CreateContactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(DataService),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ContactsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
