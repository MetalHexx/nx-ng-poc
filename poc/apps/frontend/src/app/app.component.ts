import { Component } from '@angular/core';

interface Todo {
  title: string;
}

@Component({
  selector: 'poc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Welcome core';
  todos: Todo[] = [{ title: 'Todo1' }, { title: 'Todo2' }];

  addTodo() {
    this.todos.push({
      title: `New todo ${Math.floor(Math.random() * 1000)}`,
    });
  }
}
