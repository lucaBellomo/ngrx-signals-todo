import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgForOf } from '@angular/common';
import { Todo, TodoStore } from './core/todo.store';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public title = 'ngrx-signals-todo';
  public readonly todoStore = inject(TodoStore);

  public readonly todos = this.todoStore.todos;

  public addTodo(text: string) {
    if (text.trim()) {
      this.todoStore.addTodo(text);
    }
  }

  public toggleTodo(id: number) {
    this.todoStore.toggleCompleted(id);
  }
}
