import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { HttpClientModule} from '@angular/common/http'

import { PhonebookAppComponent } from './phonebook-app.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { NotesComponent } from "./components/notes/notes.component";

import { MaterialModule } from "../material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { CommonModule } from '@angular/common';
import { UserService } from "./services/user.service";
import { NewContactDialogComponent } from './components/new-contact-dialog/new-contact-dialog.component';

const routes: Routes = [
  {path:'', component: PhonebookAppComponent,
   children:[
     {path: ':id', component: MainContentComponent},
     {path: '', component: MainContentComponent}
   ]},
  {path:'**', redirectTo:''}
]
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  providers : [UserService],
  declarations: [
    PhonebookAppComponent,
    MainContentComponent,
    ToolbarComponent, 
    SidenavComponent, 
    NotesComponent, NewContactDialogComponent],

    entryComponents:[
      NewContactDialogComponent
    ]
})
export class PhonebookModule { }
