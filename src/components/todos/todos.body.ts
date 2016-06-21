import {Component, OnInit,} from '@angular/core';

import {TodosDetailComponent} from './todos.detail'; 

import {TodosStore, TODOS_STORE} from '../../share';

@Component({
  selector: 'todos-body',
  template: `
    <todos-detail *ngFor="let item of todolist; let i = index"
      [no]=i
      title={{item.title}}
      desc={{item.desc}}
      (on-delete)="onDelete(i)">
    </todos-detail>
    `,
  directives: [TodosDetailComponent]
})
export class TodosBodyComponent implements OnInit  {

  todolist: TODOS_STORE[];

  constructor (private todosStore: TodosStore) {}

  ngOnInit () {
    this.todolist = this.todosStore.getList();
  }

  onDelete(index) {
    this.todosStore.delete(index);
  }
}
