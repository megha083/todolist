import { Injectable } from '@angular/core';

const storageName = 'aah_todo_list';

const defaultList = [
  { title: 'install NodeJS' },
  { title: 'install Angular CLI' },
  { title: 'create new app' },
];

@Injectable()
export class TodoListStorageService {

  private todoList: any;

  constructor() { 
    this.todoList = JSON.parse(localStorage.getItem(storageName) as any)|| defaultList;

  }

  // get items
  get() {
    return [...this.todoList];
  }

  // add a new item
  post(item: any) {
    this.todoList.push(item);
    return this.update();
  }

  

  

  // update an item
  put(item: any, changes: any) {
    Object.assign(this.todoList[this.findItemIndex(item)], changes);
    return this.update();
  }

  // remove an item
  destroy(item: any) {
    this.todoList.splice(this.findItemIndex(item), 1);
    return this.update();
  }

  private update() {
    localStorage.setItem(storageName, JSON.stringify(this.todoList));

    return this.get();
  }

  private findItemIndex(item: any) {
    return this.todoList.indexOf(item);
  }
}
