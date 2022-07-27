import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {
  title = 'TODO Items';
  todoList:any;
  
  constructor(private todoListService:TodoListService) { }

  ngOnInit(): void {
    this.todoList = this.todoListService.getTodoList();
  }

  addItem(title: any):void{
    this.todoList = this.todoListService.addItem({ title });
  }

  removeItem(item: any) {
    this.todoList = this.todoListService.removeItem(item);
  }

  

}
