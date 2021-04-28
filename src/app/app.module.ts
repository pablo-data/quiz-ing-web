import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { ListTasksScreenComponent } from './components/list-tasks-screen/list-tasks-screen.component';
import { EditTaskScreenComponent } from './components/edit-task-screen/edit-task-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeScreenComponent,
    ListTasksScreenComponent,
    EditTaskScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
