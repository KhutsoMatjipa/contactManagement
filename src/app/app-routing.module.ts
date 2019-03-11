import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './_pages/contact-list/contact-list.component';
import { AppComponent } from './app.component';
import { CreateContactComponent } from './_pages/create-contact/create-contact.component';
import { HomeComponent } from './_pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'viewContact',
    component: ContactListComponent
  },
  {
    path: 'createContact',
    component: CreateContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
