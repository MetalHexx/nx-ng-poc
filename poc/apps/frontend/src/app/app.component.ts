import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Todo } from '@poc/shared-data';

@Component({
  selector: 'poc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Welcome core';
  todos: Todo[] = [{ title: 'Todo1' }, { title: 'Todo2' }];

  constructor(private http: HttpClient) {
    this.fetch();
  }

  fetch() {
    this.http.get<Todo[]>('/api/todos').subscribe((t) => (this.todos = t));
  }

  addTodo() {
    this.http.post('/api/todos', {}).subscribe(() => {
      this.fetch();
    });
  }
}
