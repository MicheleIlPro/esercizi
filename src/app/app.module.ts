import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgIfElseComponent } from './components/ng-if-else/ng-if-else.component';
import { NgIfThenElseComponent } from './components/ng-if-then-else/ng-if-then-else.component';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { FileComponent } from './eseciziofinale/file/file.component';
import { TodolistComponent } from './todolist/todolist.component';
import { FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NgIfComponent,
    NgIfElseComponent,
    NgIfThenElseComponent,
    NgSwitchComponent,
    NgForComponent,
    FileComponent,
    TodolistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
