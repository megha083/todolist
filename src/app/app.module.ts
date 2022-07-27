import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { ItemComponent } from './item/item.component';
import { ListManagerComponent } from './list-manager/list-manager.component';
import { TodoListStorageService } from './todo-list-storage.service';
import { TodoListService } from './todo-list.service';
import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ItemComponent,
    ListManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [TodoListService,TodoListStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
