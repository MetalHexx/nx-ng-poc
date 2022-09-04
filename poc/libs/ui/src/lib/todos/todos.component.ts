import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '@poc/shared-data'

@Component({
  selector: 'poc-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {
  @Input() todos?: Todo[];
}
