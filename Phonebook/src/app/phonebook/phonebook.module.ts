import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { HttpClientModule} from '@angular/common/http'

import { PhonebookAppComponent } from './phonebook-app.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { NotesComponent } from "./components/notes/notes.component";

import { MaterialModule } from "../material.module";
import { FormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { CommonModule } from '@angular/common';
import { UserService } from "./services/user.service";

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
    RouterModule.forChild(routes),
  ],
  providers : [UserService],
  declarations: [
    PhonebookAppComponent,
    MainContentComponent,
    ToolbarComponent, 
    SidenavComponent, 
    NotesComponent]
})
export class PhonebookModule { }
