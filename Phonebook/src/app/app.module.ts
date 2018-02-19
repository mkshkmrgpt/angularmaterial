import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module'
import { PhonebookAppComponent } from "./phonebook/phonebook-app.component";
import { PhonebookModule } from "./phonebook/phonebook.module";

const routes: Routes = [
  {path : 'phonebook', loadChildren:'./phonebook/phonebook.module#PhonebookModule'},
  {path : '**', redirectTo:'phonebook'}
]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(routes),
    PhonebookModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
